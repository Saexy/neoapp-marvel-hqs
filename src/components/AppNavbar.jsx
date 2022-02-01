import React from 'react'
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs"

import './AppNavbar.css'

import Logo from '../images/logo.png'

const AppNavbar = () => {

    return (
        <>
            <Row>
                <Col md={12}>
                    <Navbar bg="transparent" expand="lg" sticky="top">
                        <Container>
                            <Navbar.Brand href="/"><img src={Logo} width="175" /></Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/cart"><BsFillCartFill className='cart-icon'/></Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </>
    )  
}

export default AppNavbar