import React from 'react'
import { User, ChevronDown } from 'react-feather'
import ButtonTransparent from '../../BaseComponents/ButtonTransparent/ButtonTransparent'
import { buttonText } from './AccountButton.module.scss'

export default function AccountButton({ username = 'Username' }) {
  return (
    <div>
      <ButtonTransparent>
        <span className={buttonText}>{username}</span>
        <ChevronDown />
      </ButtonTransparent>
    </div>
  )
}
