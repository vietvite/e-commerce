import React from 'react'
import MenuItem from '../../BaseComponents/MenuItem/MenuItem'
import { Sidebar } from './DashboardSidebar.module.scss'

const DashboardSidebar = ({ listDashboardMenu, selectTab }) => {
  return (
    <div className={Sidebar}>
      {listDashboardMenu.map((menu, i) => (
        <MenuItem key={i} {...menu} />
      ))}
    </div>
  )
}

export default DashboardSidebar