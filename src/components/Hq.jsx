import React from 'react'
import { useState } from 'react'
import {Card, Button, Modal} from 'react-bootstrap'

import './Hq.css'

const Hq = ({image, title, description}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
        <Card style={{ width: '18rem', margin: '30px' }}>
            <div className='hq-container'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
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
            <Button variant="success" onClick={handleClose}>
                Adicionar ao carrinho
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
 
export default Hq