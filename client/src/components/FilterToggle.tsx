import React from "react";
import styles from "./FilterToggle.module.scss";

interface FilterToggleProps {
  showAll: boolean;
  onToggle: () => void;
}

export const FilterToggle = ({ showAll, onToggle }: FilterToggleProps) => {
  return (
    <div className={styles.filterToggle}>
      <button
        onClick={() => onToggle()}
        className={`${styles.option} ${showAll ? styles.active : ""}`}
      >
        All
      </button>
      <button
        onClick={() => onToggle()}
        className={`${styles.option} ${!showAll ? styles.active : ""}`}
      >
        Connected
      </button>
    </div>
  );
};
