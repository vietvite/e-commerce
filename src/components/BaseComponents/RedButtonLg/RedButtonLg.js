import React from 'react'
import { style } from './RedButtonLg.module.scss'

function RedButtonLg({ children, onClick }) {
  return (
    <button type="button" className={style} onClick={onClick}>
      {children}
    </button >
  )
}

export default RedButtonLg
