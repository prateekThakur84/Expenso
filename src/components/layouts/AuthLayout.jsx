import React from 'react'
import CARD_2 from '../../assets/login3.jpg'

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
        {children}
      </div>

      <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative '>

        <img
        src={CARD_2}
        className='w-64 lg:w-[90%] absolute bottom-1 shadow-lg shadow-blur-400/15'
        />
      </div>
    </div>
  )
}

export default AuthLayout