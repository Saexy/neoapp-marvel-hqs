//Importação dos componentes usados
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {Card, Button, Modal} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import './Hq.css'

const Hq = ({image, title, description, price, rarity}) => {

    //Definição de todos os Hooks
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    //Funções para deixar o Modal ativo e desativo
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    //Função para adicionar um item no carrinho
    const handleCartItemAddition = (title, description, image, price, rarity) => {
        const data = JSON.parse(localStorage.getItem("cart"))
        const newCart = JSON.stringify([...data, {
            id: uuidv4(),
            title: title,
            description: description,
            image: image,
            price: price,
            rarity: rarity,
        }])
    
        localStorage.setItem("cart", newCart)
    }

    //Função ao clicar em adicionar ao carrinho, que mescla a função de adicionar um item ao carrinho
    //com a função de fechar o modal e redirecionar para a rota do carrinho
    const handleClickAddition = (title, description, image, price, rarity) =>{
        handleClose()
        handleCartItemAddition(title, description, image, price, rarity)
        
        navigate(`/cart`)
    }

    return ( 
        <>
        <Card style={{ background: 'grey', width: '18rem', margin: '30px' }}>
            <div className='hq-container'>
                <Card.Img variant='top' src={image} />
                <Card.Body>
                    <Card.Title className='text-white'>{title}</Card.Title>
                    <Card.Text className='text-white'>
                        <h3>$ {price}</h3>
                        {/* Formatação de caixa condicional, se a Hq tiver a raridade Comum ou não */}
                        <div className={rarity == 'Comum' ? 'bg-primary' : 'bg-success'}>
                            <h3 className='p-2 text-center'>{rarity}</h3>
                        </div> 
                    </Card.Text>
                    <Button className='hq-button' onClick={() => (handleShow())}>Visualizar</Button>
                </Card.Body>
            </div>
        </Card>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{description}</Modal.Body>
            <Modal.Footer>
            <Button variant='danger' onClick={handleClose}>
                Voltar
            </Button>
            <Button variant='success' onClick={() => (handleClickAddition(title, description, image, price, rarity))}>
                Adicionar ao carrinho
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
 
export default Hq