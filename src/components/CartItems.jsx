//Importação dos componentes usados
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import CartItem from './CartItem'

import './CartItems.css'

const CartItems = ({ discountCoupons }) => {

    //Instanciando o item do localStorage que corresponde a todos os itens do carrinho
    const data = JSON.parse(localStorage.getItem("cart"))

    //Definição de todos os Hooks
    let [priceCommon] = useState(0.00)
    let [priceRare] = useState(0.00)
    let [discountCommon] = useState(0.00)
    let [discountRare] = useState(0.00)
    const [inputDiscount, setInputDiscount] = useState('') 
    const navigate = useNavigate()

    //Função para listagem dos itens do carrinho
    const listData = data.map((dataCartItem) => {

        //Caso o item do carrinho não tenha descrição nativa, ela naturalmente será setada com o valor abaixo
        let description = 'This HQ doesnt have a description'
        if(!!dataCartItem.description){
            description = dataCartItem.description.replaceAll('<br>', '\n')
        }

        //Incrementaação do preço total da compra baseado na raridade do item do carrinho
        if(dataCartItem.rarity == 'Comum'){
            priceCommon += dataCartItem.price
        }else{
            priceRare += dataCartItem.price
        }

        return (<CartItem id={dataCartItem.id} image={dataCartItem.image} title={dataCartItem.title} description={description} price={dataCartItem.price} rarity={dataCartItem.rarity}/>)
    })

    //Função para finalizar a compra, limpar o carrinho e redirecionar para a rota da página inicial
    const handleFinishPurchase = () => {
        const newCart = JSON.stringify([])
        localStorage.setItem("cart", newCart)

        navigate(`/`)
    }

    //Função para continuar comprando e redirecionar para a rota da página inicial
    const handleContinuePurchase = () => {
        navigate(`/`)
    }

    //Função para continuar comprando e redirecionar para a rota da página inicial
    const handleHomeClick = () => {
        navigate(`/`)
    }

    //Função de verificação se existe item do carrinho compatível com o cupom inserido
    const verifyExistsCartItemRarity = () => {
        //Instanciando o cupom, filtrando a array baseado no que foi inserido pelo usuário
        const coupon = discountCoupons.filter(coupon => coupon.name.toUpperCase() == inputDiscount.toUpperCase())[0]

        //Verificando se existe item no carrinho compatível com o cupom instanciado
        if(data.filter(cartitem => cartitem.rarity == coupon.rarity).length > 0) {
            
            //Valor total dos itens pela raridade que será filtrada
            let totalValueCartItemsRarity = 0.00

            //Incrementação do valor total, filtrando a array do carrinho baseado na raridade do cupom inserido 
            data.filter(cartitem => cartitem.rarity == coupon.rarity).map(cartitem => totalValueCartItemsRarity += cartitem.price)
            
            //Verificando a raridade do cupom
            if(coupon.rarity == 'Comum'){
                //Aplicando o disconto somente para itens da raridade Comum
                discountCommon = totalValueCartItemsRarity * (coupon.percentage / 100)
            }else{
                //Aplicando o disconto somente para itens da raridade Raro
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
                //Verificando se há algum item adicionado no carrinho
                    <Row>
                        <h1 class='p-5 text-white text-center'>Você não tem itens adicionados ainda no carrinho.</h1>
                        <Col md={12} className='d-flex justify-content-center align-items-center'>
                            <Button variant='danger' className='m-3' onClick={() => (handleHomeClick())}>
                                Ir para a página inicial
                            </Button>
                        </Col>
                    </Row>
                }
                {data.length > 0 &&
                //Se há algum item adicionado no carrinho, execute:
                    <Row>
                        {listData}
                        <Col md={12} className='d-flex justify-content-center align-items-center'>
                            <Row>
                                <Col md={12} className='d-flex justify-content-center mt-2'>
                                    <h3 className='text-white'>Digite o cupom de disconto:</h3>
                                    <input type='text' placeholder='Cupom...' onChange={event => {setInputDiscount(event.target.value)}}/>
                                    
                                </Col>
                                <Col md={12} className='mt-2'>
                                    {inputDiscount != '' &&
                                    //Verificando se o cupom de disconto inserido não é um valor vazio
                                        <>
                                            {discountCoupons.filter(coupon => coupon.name.toUpperCase() == inputDiscount.toUpperCase()).length > 0 &&
                                            //Verificando se há algum cupom de disconto inserido baseado no que o usuário digitou
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
                                            //Verificando se há algum cupom de disconto inserido baseado no que o usuário digitou
                                                <h4 className='text-center text-danger'>Não há nenhum cupom de disconto com este nome.</h4>
                                            }  
                                        </>
                                    }
                                </Col>
                                <Col md={12} className='mt-2'>
                                    <h3 className='text-white text-center'>Preço Total: $ {priceCommon + priceRare}</h3>
                                    {discountRare > 0.00 &&
                                    //Verificando se o valor de disconto raro é maior que 0 
                                        <h3 className='text-white text-center'>Desconto aplicado (Raro): $ {discountRare.toFixed(2)}</h3>
                                    }
                                    {discountCommon > 0.00 &&
                                    //Verificando se o valor de disconto comum é maior que 0 
                                        <h3 className='text-white text-center'>Desconto aplicado (Comum): $ {discountCommon.toFixed(2)}</h3>
                                    }
                                    <h3 className='text-white text-center'>Preço Final: $ {((priceCommon + priceRare) - (discountCommon + discountRare)).toFixed(2)}</h3>
                                </Col>
                                <Col md={12} className='mt-3 d-flex justify-content-center align-items-center'>
                                    <Button variant='primary' className='m-3' onClick={() => (handleContinuePurchase())}>
                                        Continuar comprando
                                    </Button>
                                    <Button variant='success' className='m-3' onClick={() => (handleFinishPurchase())}>
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