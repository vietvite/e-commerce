import React from 'react'
import styles from './ButtonIcon.module.scss'

export default function ButtonIcon({ children }) {
  return (
    <button className={styles.buttonIcon}>
      {children}
    </button>
  )
}
