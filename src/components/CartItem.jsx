//Importação dos componentes usados
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import { BsFillCartDashFill, BsFillEyeFill } from "react-icons/bs"

import './CartItem.css'

const CartItem = ({id, image, title, description, price, rarity}) => {

    //Definição de todos os Hooks
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    //Funções para deixar o Modal ativo e desativo
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    //Função para deletar um item do carrinho
    const handleCartItemDeletion = (id) => {
        const data = JSON.parse(localStorage.getItem("cart"))
        const newCart = JSON.stringify(data.filter(cartitem => cartitem.id != id))
        localStorage.setItem("cart", newCart)

        navigate(`/`)
        navigate(`/cart`)
    }

    return (
        <>
            <Row>
                <Col style={{ background: '#ad0d15'}} md={12} className='m-3'>
                    <Row>
                        <Col md={2} className='d-flex justify-content-center align-items-center p-3'>
                            <img src={image} width='100'/>
                        </Col>
                        <Col md={4} className='d-flex justify-content-center align-items-center'>
                            <h2 className='text-white'>{title}</h2>
                        </Col>
                        <Col md={2} className='d-flex justify-content-center align-items-center'>
                            <h2 className='text-white'>$ {price}</h2>
                        </Col>
                        <Col md={2} className='d-flex justify-content-center align-items-center'>
                            {/* Formatação de caixa condicional, se a Hq tiver a raridade Comum ou não */}
                            <div className={rarity == 'Comum' ? 'bg-primary' : 'bg-success'}>
                                <h3 className='p-2 text-center text-white'>{rarity}</h3>
                            </div>
                        </Col>
                        <Col md={2} className='d-flex align-items-center justify-content-center'>
                            <BsFillCartDashFill onClick={() => (handleCartItemDeletion(id))} className='icon-remove-cart-item m-3'/>
                            <BsFillEyeFill onClick={() => (handleShow())} className='icon-view-cart-item m-3' />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
 
export default CartItem