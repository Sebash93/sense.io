import React from "react";
import styles from "./Sensor.module.scss";
import useSensorValue from "../hooks/useSensorValue";

interface SensorProps {
  name: string;
  unit: string;
  id: string;
  connected: boolean;
  onToggleConnection: (id: string, isConnected: boolean) => void;
}

export const Sensor = ({
  name,
  unit,
  id,
  connected,
  onToggleConnection,
}: SensorProps) => {
  const value = useSensorValue(id);
  return (
    <div className={styles.sensor}>
      <div>
        <h3>{name}</h3>
        {value !== null && (
          <span className={styles.value}>
            {value} {unit}
          </span>
        )}
      </div>
      <div className={styles.connectionCol}>
        <div
          className={connected ? styles.dotConnected : styles.dotDisconnected}
        ></div>
        <button
          className={connected ? styles.btnDisconnect : styles.btnConnect}
          onClick={() => onToggleConnection(id, connected)}
        >
          {connected ? "Disconnect" : "Connect"}
        </button>
      </div>
    </div>
  );
};
