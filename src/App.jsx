import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'

import AppNavbar from './components/AppNavbar'
import List from './components/List'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
      <AppNavbar/>
      <Router>
        <Routes>
          <Route path="/" element={<List/>} exact/>
          <Route path="/cart" element={<Cart/>} exact/>
          <Route path="*" element={<NotFound/>} exact/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
