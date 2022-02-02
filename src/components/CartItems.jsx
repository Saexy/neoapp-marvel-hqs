import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import CartItem from './CartItem'

import './CartItems.css'

const CartItems = ({ discountCoupons }) => {

    const data = JSON.parse(localStorage.getItem("cart"))

    let [priceCommon] = useState(0.00)
    let [priceRare] = useState(0.00)
    let [discountCommon] = useState(0.00)
    let [discountRare] = useState(0.00)

    const [inputDiscount, setInputDiscount] = useState('') 

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

    const verifyExistsCartItemRarity = () => {
        const coupon = discountCoupons.filter(coupon => coupon.name.toUpperCase() == inputDiscount.toUpperCase())[0]

        if(data.filter(cartitem => cartitem.rarity == coupon.rarity).length > 0) {

            let totalValueCartItemsRarity = 0.00

            data.filter(cartitem => cartitem.rarity == coupon.rarity).map(cartitem => totalValueCartItemsRarity += cartitem.price)
            
            if(coupon.rarity == 'Comum'){
                discountCommon = totalValueCartItemsRarity * (coupon.percentage / 100)
            }else{
                discountRare = totalValueCartItemsRarity * (coupon.percentage / 100)
            }
            return true
        }else{
            return false
        }
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
                                <Col md={12} className='d-flex justify-content-center mt-2'>
                                    <h3 className='text-white'>Digite o cupom de disconto:</h3>
                                    <input type="text" placeholder="Cupom..." onChange={event => {setInputDiscount(event.target.value)}}/>
                                    
                                </Col>
                                <Col md={12} className='mt-2'>
                                    {inputDiscount != '' &&
                                        <>
                                            {discountCoupons.filter(coupon => coupon.name.toUpperCase() == inputDiscount.toUpperCase()).length > 0 &&
                                                <>
                                                    {verifyExistsCartItemRarity() == true &&
                                                        <h4 className='text-center text-success'>Cupom aplicado!</h4>
                                                    }
                                                    {verifyExistsCartItemRarity() == false &&
                                                        <h4 className='text-center text-danger'>Não há nenhum item inserido no carrinho que tenha a mesma raridade que o cupom inserido.</h4>
                                                    }
                                                </>
                                            }
                                            {discountCoupons.filter(coupon => coupon.name.toUpperCase() == inputDiscount.toUpperCase()).length <= 0 &&
                                                <h4 className='text-center text-danger'>Não há nenhum cupom de disconto com este nome.</h4>
                                            }  
                                        </>
                                    }
                                </Col>
                                <Col md={12} className='mt-2'>
                                    <h3 className='text-white text-center'>Preço Total: $ {priceCommon + priceRare}</h3>
                                    {discountRare > 0.00 &&
                                        <h3 className='text-white text-center'>Desconto aplicado (Raro): $ {discountRare.toFixed(2)}</h3>
                                    }
                                    {discountCommon > 0.00 &&
                                        <h3 className='text-white text-center'>Desconto aplicado (Comum): $ {discountCommon.toFixed(2)}</h3>
                                    }
                                    <h3 className='text-white text-center'>Preço Final: $ {((priceCommon + priceRare) - (discountCommon + discountRare)).toFixed(2)}</h3>
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