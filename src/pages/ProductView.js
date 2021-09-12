import React from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../functions/getItemById';
import { Footer } from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { GrAddCircle } from 'react-icons/gr'

function ProductView({ match }) {

  const { id } = useParams();
  const item = getItemById(id, match.path);
  console.log(item)
  const sizes = ['S', 'M', 'L']
  return (
    <>
      <Navbar />
      <section className="container__pviews">
        <img className="view__img" src={item.image} alt="" />
        <h3>{item.name}</h3>
        <div className="price_products">
          <h3>{item.price}</h3>
          <div>
            <input type="number" name="" id="" />
            <GrAddCircle size={'1.3em'} className="button__add" />
          </div>

        </div>

        <div className="sizes__products">
          <h3>Elegir la talla</h3>
          {sizes.map((size, index) => <span className="sizes__item" key={index}>{size}</span>)}
        </div>
      </section>


      <Footer />

    </>
  )
}

export { ProductView }
