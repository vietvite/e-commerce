import React from 'react'
import logo from './logo.png'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  )
}
