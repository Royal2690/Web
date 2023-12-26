import React from 'react'
import Header from './header'
import Footer from './footer'
const Layout = ({ childern }) => {
    return (
        <>
            <Header />
            {childern}
            <Footer />
        </>
    )
}

export default Layout
