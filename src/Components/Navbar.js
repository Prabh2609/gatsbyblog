import { Link } from 'gatsby'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../assets/images/logo.svg'

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg">
        <Container>
            <Link to='/'>
            <Navbar.Brand>
                <img src={Logo} alt="Logo"/>
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='justify-content-end'/>
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
                <Nav.Link >
                  <Link to={`/Category`} >Lifestyle</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to={'/Category'}>Photodiary</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to={'/Category'}>Music</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to={'/Category'}>Travel</Link>
                  
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarComponent