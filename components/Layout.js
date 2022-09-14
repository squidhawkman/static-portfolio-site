import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'

import React from 'react'

export default function Layout({children}) {
  return (
    <>
    <Meta />
    <Nav />
    <main>
        {children}
    </main>
    <Footer />
    </>
  )
}
