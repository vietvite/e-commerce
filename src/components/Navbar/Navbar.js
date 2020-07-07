import React from 'react'
import CategoryMenu from 'components/CategoryMenu/CategoryMenu'
import { navbar } from './Navbar.module.scss'
import Container from 'components/Container/Container'

function Navbar() {
  return (
    <div className={navbar}>
      <Container>
        <CategoryMenu />
      </Container>
    </div>
  )
}

export default Navbar
