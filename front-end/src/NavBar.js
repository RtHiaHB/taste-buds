import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const TBNavBar = () => {
    return (
        <>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/">Taste Buds</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/locations">Locations</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
                <Nav.Link href="/menu">Menu</Nav.Link>
                <Nav.Link href="/order">Takeout</Nav.Link>
                <Nav.Link href="/events">Private Events</Nav.Link>
                <Nav.Link href="/signin">Sign In</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default TBNavBar