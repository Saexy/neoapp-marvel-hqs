import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import CartItem from './CartItem'

import './CartItems.css'

const CartItems = () => {

    const data = JSON.parse(localStorage.getItem("cart"))

    let [priceCommon, setPriceCommon] = useState(0.00)
    let [priceRare, setPriceRare] = useState(0.00)

    const navigate = useNavigate()

    const listData = data.map((dataCartItem) => {

        let description = "This HQ doesn't have a description"
        if(!!dataCartItem.description){
            description = dataCartItem.description.replaceAll('<br>', '\n')
        }

        if(dataCartItem.rarity == 'Comum'){
            priceCommon += dataCartItem.price
        }else{
            priceRare += dataCartItem.price
        }

        return (<CartItem id={dataCartItem.id} image={dataCartItem.image} title={dataCartItem.title} description={description} price={dataCartItem.price} rarity={dataCartItem.rarity}/>)
    })

    const handleFinishPurchase = () => {
        const newCart = JSON.stringify([])
        localStorage.setItem("cart", newCart)

        navigate(`/`)
    }

    const handleContinuePurchase = () => {
        navigate(`/`)
    }

    const handleHomeClick = () => {
        navigate(`/`)
    }

    return (
        <>
            <Container className='cartitems-container'>
                {data.length <= 0 &&
                    <Row>
                        <h1 class="p-5 text-white text-center">Você não tem itens adicionados ainda no carrinho.</h1>
                        <Col md={12} className='d-flex justify-content-center align-items-center'>
                            <Button variant="danger" className='m-3' onClick={() => (handleHomeClick())}>
                                Ir para a página inicial
                            </Button>
                        </Col>
                    </Row>
                }
                {data.length > 0 &&
                    <Row>
                        {listData}
                        <Col md={12} className='d-flex justify-content-center align-items-center'>
                            <Row>
                                <Col md={12} className='mt-2'>
                                    <h3 className='text-white text-center'>Preço Total: $ {priceCommon + priceRare}</h3>
                                    <h3 className='text-white text-center'>Preço Final: $ {priceCommon + priceRare}</h3>
                                </Col>
                                <Col md={12} className='mt-3 d-flex justify-content-center align-items-center'>
                                    <Button variant="primary" className='m-3' onClick={() => (handleContinuePurchase())}>
                                        Continuar comprando
                                    </Button>
                                    <Button variant="success" className='m-3' onClick={() => (handleFinishPurchase())}>
                                        Finalizar compra
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                }
                
            </Container>
        </>
    )
}
 
export default CartItems