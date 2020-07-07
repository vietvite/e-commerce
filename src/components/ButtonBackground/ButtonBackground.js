import React from 'react'
import styles from './ButtonBackground.module.scss'

export default function ButtonBackground({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.buttonBackground}>
      {children}
    </button>
  )
}