import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col, Container, Spinner } from 'react-bootstrap'

import Quadrinhos from '../images/quadrinhos.jpg'

import Hqs from './Hqs'

import './Home.css'

const Home = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        loadMarvelAPI()
    },[])

    const loadMarvelAPI = () => {
        setLoading(true)

        let url = `https://gateway.marvel.com/v1/public/comics?ts=1643606207&apikey=1ae75d137a9531f7e99fe738b43c158d&hash=4279c18b11fb7ca0f0f71c02f6765c91`
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            setData(data.data.results)
        })
        .catch(function(){
            setError(true)
        })

        setLoading(false)
    }

    return ( 
        <>
            <Row className='mt-3'>
                <Col md={12} className='background-darkred'>
                    <Container>
                        <Row className='hqs-container'>
                            <Col md={6} className='hqs-texts'>
                                <h1 className='text-white'>Seja bem-vindo(a) ao Neo App x Marvel</h1>
                                <h3 className='text-white'>Aqui você pode comprar HQs, adicionando ao carrinho, e antes de adicionar, pode visualizar a descrição e título.</h3>
                                <h3 className='text-white'>Basta rolar a página, e procurar sua HQ desejada.</h3>
                            </Col>
                            <Col md={6} className='d-flex justify-content-center align-itens-center'>
                                <img src={Quadrinhos} width={450}/>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={12}>
                    <Container>
                        <Row class="search-container">
                            <Col md={12} className='d-flex justify-content-center'>
                                <h3>Digite a HQ desejada:</h3>
                                <input type="text" name="" id=""/>
                            </Col>
                            <Col md={12}>
                                <Row className='d-flex justify-content-center mt-2'>
                                    {error &&
                                        <h1>Erro inesperado ao consumir a API da Marvel!</h1>
                                    }
                                    {loading &&
                                        <Spinner className="mt-5" animation="border" role="status"/>
                                    }
                                    <Hqs data={data}/>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}
 
export default Home