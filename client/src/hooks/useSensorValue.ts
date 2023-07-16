import { useEffect, useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { SensorMessage, WS_URL } from "./useSensors";

const useSensorValue = (id: string) => {
  const { lastMessage } = useWebSocket(WS_URL, {
    share: true,
  });

  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    if (lastMessage !== null) {
      const message: SensorMessage = JSON.parse(lastMessage.data);
      if (message.id === id) {
        setValue(message.value);
      }
    }
  }, [lastMessage, setValue]);

  return value;
};

export default useSensorValue;
