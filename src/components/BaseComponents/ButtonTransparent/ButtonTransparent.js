import React from "react";
import styles from "./ButtonTransparent.module.scss";

export default function ButtonTransparent({ children, toggleFormModal }) {
  return (
    <button className={styles.buttonTransparent} onClick={toggleFormModal}>
      {children}
    </button>
  );
}
