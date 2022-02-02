import React from 'react'
import {Container} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import AppNavbar from './AppNavbar'
import CartItems from './CartItems'

const Cart = () => {

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
            <CartItems discountCoupons={discountCoupons}/>
        </Container>
    )
}
 
export default Cart