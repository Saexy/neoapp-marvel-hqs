import React from 'react'
import {Container} from 'react-bootstrap'

import AppNavbar from './AppNavbar'
import CartItems from './CartItems'

const Cart = () => {
    return ( 
        <Container>
            <AppNavbar />
            <CartItems />
        </Container>
    )
}
 
export default Cart