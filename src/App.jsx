import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'

import './App.css'

import AppNavbar from './components/AppNavbar'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

const App = () => {

  return (
    <>
      <Container>
        <AppNavbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/cart" element={<Cart/>} exact/>
            <Route path="*" element={<NotFound/>} exact/>
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App
