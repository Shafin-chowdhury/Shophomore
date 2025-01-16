import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingBag, FaShoppingCart, FaUser } from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import { useSelector } from 'react-redux'
import Model from "./Model"
import Login from './Login'
import Register from './Register'


const Navber = () => {
const [isModelOpen, setIsModelOpen] = useState(false)
const [isLogin, setIsLogin] = useState(true)


const openSignUP = () => {
  setIsLogin (false)
  setIsModelOpen(true)
}

const openLogin = () => {
  setIsLogin(true)
  setIsModelOpen(true)
}

  const products = useSelector(state=> state.cart.products)
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto h-[100px]  px-4 md:px-16, lg:px-24 py-4 flex justify-between items-center'>
    
   <div className="py-4">
          <img src={Logo} alt="Logo image" style={{ width: '150px', height: 'auto' }} />
        </div>

        <div className='relative flex-1 mx-4'>
            <form>
                <input type='text' placeholder='Search for Books'
                className='w-full border py-2 px-4'/>
                <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
            </form>
        </div>

        <div className='flex items-center space-x-4'>
           

            <Link to= "/Cart" className='relative'>
            <FaShoppingCart className='text-lg' />
            {products.length > 0 && (
              <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white '>
              {products.length}
              </span>
            )}
            </Link>

              <button className='hidden md:block'
              onClick={() => setIsModelOpen(true)}>
                Login | Register
              </button>

              <button className='block md:hidden'>
                <FaUser />
              </button>
        </div>
      </div>


      <div className='flex items-center justify-center space-x-14 py-4 text-sm font-style: italic font-bold'>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/Shop" className='hover:underline'>Shop</Link>
        <Link to="/"  className='hover:underline'>About</Link>
        <Link to="/" className='hover:underline'>Contact</Link>
      </div>
      <Model isModelOpen={isModelOpen}
      setIsModelOpen = {setIsModelOpen} >
        {isLogin ? <Login openSignUP = {openSignUP} /> : <Register openLogin= {openLogin} />}
      </Model>
    </nav>
  )
}

export default Navber


