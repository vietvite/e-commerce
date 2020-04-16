import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import styles from './DropdownMenu.module.scss'

function DropdownMenu({ listMenu }) {
  return (
    <div className={styles.dropdownMenu}>
      {listMenu.map(
        item => <MenuItem name={item.name} url={item.url} />)
      }
    </div>
  )
}

export default DropdownMenu
