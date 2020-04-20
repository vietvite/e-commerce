import React from 'react'
import { style } from './RedButtonLg.module.scss'

function RedButtonLg({ children }) {
  return (
    <button type="button" className={style}>
      {children}
    </button >
  )
}

export default RedButtonLg
