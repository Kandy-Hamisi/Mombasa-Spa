import React from 'react'
import FooterLanding from '../FooterLanding'
import NavbarLanding from '../NavbarLanding'

const Layout = ({children}) => {
  return (
    <>
        <NavbarLanding/>
            {children}
        <FooterLanding/>
    </>
  )
}

export default Layout