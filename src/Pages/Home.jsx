import React, { useEffect } from 'react'
import { Catagories, Data } from '../Components/Data'
import Hero from "../assets/hero.png"
import Infocard from '../Components/Infocard'
import CategorySection from '../Components/CategorySection'
import { setProducts } from '../Redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import Shop from '../Pages/Shop'


const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  useEffect(()=> {
    dispatch(setProducts(Data))},
    [])
  


  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
          
                <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>Shop By Catagories</div>
                <ul className='space-y-4 bg-gray-100 p-3 border'>
            {Catagories.map((catagory,index) => (
              <li key={index} className='flex items-center text-sm font-medium'>
              <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
              {catagory}
              </li>
            ))}
          </ul>
          </div>
     
     

<div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
  <img src={Hero} alt='/' className='h-full w-full' />
  <div className='absolute inset-0 top-40 right-14  flex items-center justify-center'>
    <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>
      Shop Now
    </button>
  </div>
</div>

        </div>
        <Infocard />
        <CategorySection />

        <div className='container mx-auto py-12'>
          <h2 className='text-2xl font-semibold  mb-6 text-center'>TOP PRODUCTS</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
            {products.products.slice(0,5).map(((product) =>(
              <ProductCard product= {product} />
            )))}
          </div>
        </div>
      </div>
<Shop />
      </div>
    
  )
}


export default Home


