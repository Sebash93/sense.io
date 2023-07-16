import useSensors, { SensorMessage } from "../hooks/useSensors";
import React, { useEffect, useState } from "react";
import { Sensor } from "./Sensor";
import styles from "./SensorList.module.scss";

interface SensorsListProps {
  showDisconnected: boolean;
}

export const SensorsList = ({ showDisconnected }: SensorsListProps) => {
  const { sensors, toggleConnection } = useSensors();
  const [visibleSensors, setVisibleSensors] = useState<SensorMessage[]>([]);

  useEffect(() => {
    const visibleSensors = showDisconnected
      ? sensors
      : sensors.filter((sensor) => showDisconnected || sensor.connected);
    setVisibleSensors(visibleSensors);
  }, [sensors, showDisconnected]);

  return (
    <div className={styles.sensorList}>
      {visibleSensors?.length ? (
        visibleSensors.map((sensor) => (
          <Sensor
            key={sensor.id}
            name={sensor.name}
            unit={sensor.unit}
            id={sensor.id}
            connected={sensor.connected}
            onToggleConnection={toggleConnection}
          />
        ))
      ) : (
        <span>0 sensors found</span>
      )}
    </div>
  );
};
