import React from 'react'
import { style } from './ButtonGraySm.module.scss'

function ButtonGraySm({ children, fullWidth, center, onClick }) {
  return (
    <button
      onClick={onClick}
      className={style}
      style={{
        width: fullWidth ? '100%' : false,
        justifyContent: center ? 'center' : false
      }}>
      {children}
    </button>
  )
}

export default ButtonGraySm
