import React from 'react'

const Logo = ({size}) => {
  return (
    <div className='logo'>
        <p className={`${size} font-bold capitalize text-gray-300`}>Mingle</p>
    </div>
  )
}

export default Logo
