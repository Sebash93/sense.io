// useCustomHook.js
import { useState, useEffect, useCallback } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

export const WS_URL = "ws://localhost:5000";

export interface SensorMessage {
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string;
}

interface UseSensorResponse {
  sensors: SensorMessage[];
  toggleConnection: (id: string, isConnected: boolean) => void;
}

const useSensors: () => UseSensorResponse = () => {
  const { sendMessage, lastMessage } = useWebSocket(WS_URL, {
    share: true,
  });
  const [sensors, setSensors] = useState<SensorMessage[]>([]);
  const [sensorsIds, setSensorsIds] = useState<string[]>([]);

  // Creates the initial list of sensors
  useEffect(() => {
    if (lastMessage !== null) {
      const message: SensorMessage = JSON.parse(lastMessage.data);
      if (!sensorsIds.includes(message.id)) {
        setSensors((prev) => [...prev, message]);
        setSensorsIds((prev) => [...prev, message.id]);
      }
    }
  }, [lastMessage, sensorsIds, setSensors]);

  const toggleConnection = useCallback(
    (id: string, isConnected: boolean) => {
      sendMessage(
        JSON.stringify({
          id,
          command: isConnected ? "disconnect" : "connect",
        })
      );

      // Updates the sensor connected status manually in the hook state
      const newSensorsArray = sensors.map((sensor) => {
        if (sensor.id === id) {
          return { ...sensor, connected: !isConnected };
        }
        return sensor;
      });
      setSensors(newSensorsArray);
    },
    [sensors]
  );

  return { sensors, toggleConnection };
};

export default useSensors;
