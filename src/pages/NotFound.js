import React from 'react'
import { Footer } from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import '../assets/styles/NotFound.scss'
function NotFound() {
  return (
    <>
      <Navbar />
      <h1 className="h1__notfound">Page not found!</h1>

      <Footer />
    </>
  )
}

export { NotFound }
