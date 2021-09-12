import React from 'react'
import { Footer } from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/Products/ProductList'
import '../assets/styles/TemplateCategories.scss'
function TemplateCategories({ value, data }) {

  return (
    <>
      <Navbar />
      <h2 className="categories__titles">{value}</h2>
      <ProductList value={data} />
      <Footer />

    </>
  )
}

export { TemplateCategories }
