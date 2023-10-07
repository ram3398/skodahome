import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'

function Mynavbar() {
    return (
        <>
            <Navbar bg="dark" className='pb-0'>
                <Container>
                    <Navbar.Brand href="/" className='skoda text-white'>
                        SKODA 
                        <p className='tag mb-0'>Home Decors</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='address text-white'>
                            Oottara, Vadavannur, Kerala 678504
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Navbar expand="lg" className="bg-body-tertiary" >
                <Container >
                <Navbar.Brand href="/" className='links me-3 text-dark'>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-3 my-lg-2"
                            style={{ maxHeight: '150px' }}
                            
                        >
                            <Nav.Link href="/about" className='links mx-3 text-dark'>About Us</Nav.Link>
                            <Nav.Link href="/products" className='links mx-3 text-dark'>Furniture</Nav.Link>
                            <Nav.Link href="/timber" className='links mx-3 text-dark'>Timbers</Nav.Link>
                            <Nav.Link href="/about/#touch" className='links mx-3 text-dark'>Contact Us</Nav.Link>
                        </Nav>
                        <a variant="dark" href='/products' className='py-2 btn btn-dark border-0 rounded-0 px-5'>Shop Now</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Mynavbar
