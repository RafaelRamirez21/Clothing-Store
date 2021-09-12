import React, { useState } from 'react';
import '../../assets/styles/ProductViews.scss';
import { IoMdAdd } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import { connect } from 'react-redux'
import { addToCart } from '../../redux/Shopping/shopping-action';


function ProductScreen({ value, onToggle, addToCart }) {

  const sizes = ['S', 'M', 'L'];
  const [added, setAdded] = useState(0)
  const addProduct = () => setAdded(added + 1)
  return (
    <>
      <section className="container__pviews">
        <VscChromeClose
          onClick={onToggle}
          className="close__button--modal" />
        <img className="view__img" src={value.image} alt="" />
        <div className="container__detail--products">
          <h3>{value.name}</h3>
          <div className="price_products">
            <h3>${value.price}.000</h3>
            <div>
              <span className="amount__products">{added}</span>
              <IoMdAdd onClick={addProduct} size={'1.3em'} className="button__add" />
            </div>

          </div>

          <div className="sizes__products">
            <h3>Elegir la talla</h3>
            <div className="container__sizes--item">
              {sizes.map((size, index) => <span className="sizes__item" key={index}>{size}</span>)}
            </div>

          </div>
          <button
            onClick={() => { addToCart(value.id, value.category); onToggle() }}
            className="add__button">Añadir</button>
        </div>
      </section>

    </>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, category) => dispatch(addToCart(id, category))
  }
}
export default connect(null, mapDispatchToProps)(ProductScreen)
