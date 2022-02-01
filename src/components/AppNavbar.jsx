import React from 'react'
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

import './AppNavbar.css'

import Logo from '../images/logo.png'

const AppNavbar = () => {

    const navigate = useNavigate()

    const handleHomeClick = () => {
        navigate(`/`)
    }

    const handleCartClick = () => {
        navigate(`/cart`)
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Navbar bg="transparent" expand="lg" sticky="top">
                        <Container>
                        <Nav.Link onClick={() => (handleHomeClick())}><Navbar.Brand><img src={Logo} width="175" /></Navbar.Brand></Nav.Link>
                            <Nav className="mr-auto">
                                <Nav.Link onClick={() => (handleCartClick())}><BsFillCartFill className='cart-icon'/></Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )  
}

export default AppNavbar