import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuItem.module.scss'

function MenuItem({ name, url }) {
  return (
    <NavLink to={url} className={styles.menuItem}>
      {name}
    </NavLink>
  )
}

export default MenuItem
