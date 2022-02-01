import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {Card, Button, Modal} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import './Hq.css'

const Hq = ({image, title, description}) => {

    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleCartItemAddition = (title, description, image) => {
        const data = JSON.parse(localStorage.getItem("cart"))
        const newCart = JSON.stringify([...data, {
            id: uuidv4(),
            title: title,
            description: description,
            image: image,
        }])
    
        localStorage.setItem("cart", newCart)
    }

    const handleClickAddition = (title, description, image) =>{
        handleClose()
        handleCartItemAddition(title, description, image)
        
        navigate(`/cart`)
    }

    return ( 
        <>
        <Card style={{ background: 'grey', width: '18rem', margin: '30px' }}>
            <div className='hq-container'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-white'>{title}</Card.Title>
                    <Button className="hq-button" onClick={() => (handleShow())}>Visualizar</Button>
                </Card.Body>
            </div>
        </Card>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Voltar
            </Button>
            <Button variant="success" onClick={() => (handleClickAddition(title, description, image))}>
                Adicionar ao carrinho
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
 
export default Hq