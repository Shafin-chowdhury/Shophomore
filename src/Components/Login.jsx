import React from 'react'

const Login = ({openSignUP}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form>
        <div className='mb-4'>
            <label className='block text-gray-700'
             htmlFor="">Email</label>
            <input type="email" className='w-full px-3 py-2 border'
            placeholder='Enter Email' />
        </div>

        <div className='mb-4'>
        <label className='block text-gray-700'
        htmlFor="">Password</label>
        <input  type="password" className='w-full px-3 py-2 border'
        placeholder='Enter Password' />
        </div>

        <div className='mb-4 flex items-center justify-between'>
        <label className='inline-flex items-center'
         htmlFor="">
        <input type="checkbox"
        className='form-checkbox'
         />
        <span className='ml-2 text-gray-700'>Remember me</span>
        </label>
        <a href='#' className='text-red-500'>Forget Password</a>
        </div>

        <div className='mb-4'>
            <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
        </div>

      </form>

      <div className='text-center'>
        <span className='text-gray-700'>Don't have an account?</span>
        <button className='text-red-800' onClick={openSignUP}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
