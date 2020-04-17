import React from 'react'
import ButtonOutline from '../../BaseComponents/ButtonOutline/ButtonOutline'
import ButtonTransparent from '../../BaseComponents/ButtonTransparent/ButtonTransparent'

export default function AuthGroupButton() {
  return (
    <>
      <ButtonTransparent>
        Đăng nhập
      </ButtonTransparent>
      <ButtonOutline>
        Đăng ký
      </ButtonOutline>
    </>
  )
}
