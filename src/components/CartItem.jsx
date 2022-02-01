import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import { BsFillCartDashFill, BsFillEyeFill } from "react-icons/bs"

import './CartItem.css'

const CartItem = ({id, image, title, description}) => {

    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
                <Col style={{ background: 'grey'}} md={12} className='mt-3 mb-3'>
                    <Row>
                        <Col md={2} className='d-flex justify-content-center align-items-center p-3'>
                            <img src={image} width='100'/>
                        </Col>
                        <Col md={4} className='d-flex justify-content-center align-items-center'>
                            <h1 className='text-white'>{title}</h1>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-end'>
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
                    <Button variant="danger" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
 
export default CartItem