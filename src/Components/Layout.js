import React from 'react'
import Footer from './Footer'
import NavbarComponent from './Navbar'

const Layout = ({children}) => {
  return (
    <>
      <NavbarComponent/>
      {children}
      <Footer/>  
    </>
  )
}

export default Layout