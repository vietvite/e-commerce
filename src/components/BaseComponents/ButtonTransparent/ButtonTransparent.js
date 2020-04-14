import React from 'react'
import styles from './ButtonTransparent.module.scss'

export default function ButtonTransparent({ children }) {
  return (
    <button className={styles.buttonTransparent}>
      {children}
    </button>
  )
}
