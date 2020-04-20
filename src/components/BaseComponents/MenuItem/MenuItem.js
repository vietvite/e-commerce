import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuItem.module.scss'

function MenuItem({ name, url, icon }) {
  return (
    <NavLink to={url} className={styles.menuItem}>
      {icon}
      {name}
    </NavLink>
  )
}

export default MenuItem
