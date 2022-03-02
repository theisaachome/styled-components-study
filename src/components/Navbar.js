import React from 'react'
import { Button } from './styles/Button.styled'
import { Container } from './styles/Container.styles'
import { Header, Logo, Nav } from './styles/Header.styled'

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo"/>
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </Header>
  )
}

export default Navbar