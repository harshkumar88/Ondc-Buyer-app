import React from "react";
import styles from "./style.module.css";

const Popup = (props) => {
  const { children } = props;
  return (
    <div className={styles.popup_container}>
      <div className={styles.popup_wrapper}>{children}</div>
    </div>
  );
};

export default Popup;
