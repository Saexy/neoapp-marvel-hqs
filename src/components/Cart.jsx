//Importação dos componentes usados
import React from 'react'
import {Container} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import AppNavbar from './AppNavbar'
import CartItems from './CartItems'

const Cart = () => {

    //Criação de um array com cupons(objetos) com seus atributos
    const discountCoupons = [
        {
            id: uuidv4(),
            name: 'CUPOMRARO15',
            percentage: 15,
            rarity: 'Raro',
        },
        {
            id: uuidv4(),
            name: 'CUPOMCOMUM10',
            percentage: 10,
            rarity: 'Comum',
        }
    ]

    return ( 
        <Container>
            <AppNavbar />
            {/* Chamando o componente CarItems e passando todos os cupons de disconto nas props */}
            <CartItems discountCoupons={discountCoupons}/>
        </Container>
    )
}
 
export default Cart