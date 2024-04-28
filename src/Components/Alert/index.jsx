import React from "react";
import styles from "./style.module.css";
const Alert = ({ alert }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.content}>{alert}</span>
    </div>
  );
};

export default Alert;
