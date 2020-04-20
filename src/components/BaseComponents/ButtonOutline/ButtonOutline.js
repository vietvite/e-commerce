import React from "react";
import styles from "./ButtonOutline.module.scss";

export default function ButtonOutline({ children, toggleFormModal }) {
  return (
    <button className={styles.buttonOutline} onClick={toggleFormModal}>
      {children}
    </button>
  );
}
