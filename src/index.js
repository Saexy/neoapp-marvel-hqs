//Importação dos componentes usados
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './App'
import Cart from './components/Cart'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

//Renderizando todas as rotas criadas com seus respectivos componentes
ReactDOM.render(  
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App/>} exact/>
      <Route path="/cart" element={<Cart/>} exact/>
    </Routes>
  </Router>
  ,
  document.getElementById('root')
)
