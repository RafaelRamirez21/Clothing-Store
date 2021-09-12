import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import ItemCart from '../components/ItemCart/ItemCart'
function Cart() {
  return (
    <>
      <Navbar />
      <ItemCart />

      <Footer />
    </>
  )
}

export { Cart }