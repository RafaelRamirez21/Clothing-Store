import React from 'react'
import { About } from '../components/About/About'
import { ListCategories } from '../components/Categories/ListCategories'
import Navbar from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
function Home() {
  return (
    <>
      <Navbar />
      <ListCategories />
      <About />
      <Footer />
    </>
  )
}

export default Home
