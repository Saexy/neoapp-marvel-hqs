import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs"

import './AppNavbar.css'

import Logo from '../images/logo.png'

const AppNavbar = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Navbar bg="transparent" expand="lg" sticky="top">
                        <Container>
                            <Navbar.Brand href="/"><img src={Logo} width="175" /></Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/cart"><BsFillCartFill className='cart-icon'/></Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )  
}

export default AppNavbar;