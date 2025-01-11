import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navber from "./Components/Navber"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Auther from "./Components/Auther"




function App() {


  return (
 
      <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element = {<Home />} ></Route>
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      <Auther />
     <Footer />
     
      </BrowserRouter>
      
  )
}

export default App
