import React from 'react'
import Logo from '../logo/Logo'
import AccountComp from '../Account/AccountComp'

const Header = () => {
  return (
    <div className='p-5 shadow-md bg-gray-800 backdrop-blur-0 flex justify-between items-center'>
        <Logo size={"text-3xl"}/>
        <AccountComp/>
    </div>
  )
}

export default Header
