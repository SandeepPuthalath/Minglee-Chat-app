import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-2'>
    <Outlet/>
    </div>
  )
}

export default Layout
