import React, { useState } from "react";
import { SensorsList } from "./components/SensorsList";
import { FilterToggle } from "./components/FilterToggle";
import styles from "./App.module.scss";

export const App = () => {
  const [showAll, setShowAll] = useState(true);
  return (
    <div className={styles.app}>
      <FilterToggle
        showAll={showAll}
        onToggle={() => setShowAll((prev) => !prev)}
      />
      <SensorsList showDisconnected={showAll} />
    </div>
  );
};
