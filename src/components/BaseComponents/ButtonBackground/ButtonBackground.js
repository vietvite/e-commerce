import React from 'react'
import styles from './ButtonBackground.module.scss'

export default function ButtonBackground({ children }) {
  return (
    <button className={styles.buttonBackground}>
      {children}
    </button>
  )
}