import React from 'react'
import {Row, Col, Container, Card, Button} from 'react-bootstrap'

import Quadrinhos from '../images/quadrinhos.jpg'

import './Home.css'

const Home = () => {
    return ( 
        <>
            <Row className='mt-3'>
                <Col md={12} className='background-darkred'>
                    <Container>
                        <Row className='quadrinhos-container'>
                            <Col md={6}>
                                <h1 className='text-white'>Seja bem-vindo(a) ao Neo App x Marvel</h1>
                                <h3 className='text-white'>Aqui você pode comprar HQs, adicionando ao carrinho, e antes de adicionar, pode visualizar a descrição e título.</h3>
                            </Col>
                            <Col md={6} className='d-flex justify-content-center align-itens-center'>
                                <img src={Quadrinhos} width={450}/>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}
 
export default Home