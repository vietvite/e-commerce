import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import styles from './DropdownMenu.module.scss'

function DropdownMenu({ listMenu }) {
  return (
    <div className={styles.dropdownMenu}>
      {listMenu.map(
        (item, i) => <MenuItem key={i} {...item} />)
      }
    </div>
  )
}

export default DropdownMenu
