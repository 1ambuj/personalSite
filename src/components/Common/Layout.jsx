import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout