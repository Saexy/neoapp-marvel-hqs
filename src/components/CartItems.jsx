import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import CartItem from './CartItem'

const CartItems = () => {

    const data = JSON.parse(localStorage.getItem("cart"))

    const navigate = useNavigate()

    const listData = data.map((dataCartItem) => {

        let description = "This HQ doesn't have a description"
        if(!!dataCartItem.description){
            description = dataCartItem.description
        }

        return (<CartItem image={dataCartItem.image} title={dataCartItem.title} description={description}/>)
    })

    const handleFinishPurchase = () => {
        const newCart = JSON.stringify([])
        localStorage.setItem("cart", newCart)

        navigate(`/`)
    }

    return (
        <>
            <Container>
                {data.length <= 0 &&
                    <Row>
                        <Col md={12}>
                            <h1 class="m-5 p-5">Você não tem itens adicionados no carrinho no momento.</h1>
                        </Col>
                    </Row>
                }
                {data.length > 0 &&
                    <Row>
                        {listData}
                        <Col md={12} className='mt-3 d-flex justify-content-center align-items-center'>
                            <Button href='/' variant="primary" className='m-3'>
                                Continuar comprando
                            </Button>
                            <Button variant="success" className='m-3' onClick={() => (handleFinishPurchase())}>
                                Finalizar compra
                            </Button>
                        </Col>
                    </Row>
                }
                
            </Container>
        </>
    )
}
 
export default CartItems