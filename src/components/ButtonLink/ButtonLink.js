import React from 'react'
import { style } from './ButtonLink.module.scss'
import { NavLink } from 'react-router-dom'

function ButtonLink({ to, children, fullWidth, center }) {
  return (
    <NavLink
      to={to}
      className={style}
      style={{
        width: fullWidth ? '100%' : false,
        justifyContent: center ? 'center' : false
      }}>
      {children}
    </NavLink>
  )
}

export default ButtonLink
