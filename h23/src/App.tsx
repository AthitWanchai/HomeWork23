import './App.css'
import {  Route, Routes} from "react-router-dom"
import Home from './page/Home'
import NotFound from './page/NotFound'
import Product from './page/Product'
import Checkout from './page/Checkout'

function App() {
  return (
    <>
  <Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/Product' element={<Product/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
  </Routes>
    </>
  )
}

export default App
