import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'
import Logo from '../assets/Logo.png'

const Navber = () => {
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
           

            <Link to= "/Cart">
            <FaShoppingBag />
            </Link>

              <button className='hidden md:block'>
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
    </nav>
  )
}

export default Navber


