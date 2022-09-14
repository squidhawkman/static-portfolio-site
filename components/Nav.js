import React from 'react'
import Link from 'next/link'
import { StyledNav } from './styles/Nav.styled.js'
import { NavContainer } from './styles/NavContainer.styled.js'

export default function Nav() {
  return (
    <NavContainer>
    <StyledNav>
      <Link href='/'>Projects</Link>
      <Link href='/gallery'>Photos</Link>
    </StyledNav>
    </NavContainer>
  )
}
