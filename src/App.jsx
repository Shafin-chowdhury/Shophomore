import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react";
import Navber from "./Components/Navber"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Auther from "./Components/Auther"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import Order from "./Pages/Order"




function App() {
// const [Order, setOrder] = useState(null)
const [Order, setOrder] = useState(null);

  return (
 
      <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element = {<Home />} ></Route>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout setOrder= {setOrder} />} />
        <Route path="/order-confirmation" element={<Checkout Order= {Order} />} />
      </Routes>
      <Auther />
     <Footer />
     
      </BrowserRouter>
      
  )
}

export default App
