import React, { useState } from 'react'
import '../../assets/styles/ProductsList.scss';
import '../../assets/styles/ProductViews.scss';
import { ModalProducts } from '../../pages/ModalProducts';
import ProductScreen from '../ProductScreen/ProductScreen';


function ProductItem({ value }) {
  const [openModal, setOpenModal] = useState(false);
  const open = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      {/* // <Link to={`${value.path}${value.id}`}> */}
      <div onClick={open} className="minicard">
        <img className="product__img" src={value.image} alt={value.name} />
        <h3>{value.name}</h3>
        <h4>$ {value.price}.000</h4>
      </div>
      {openModal && (
        <ModalProducts>
          <ProductScreen value={value} onToggle={open} />
        </ModalProducts>
      )}
      {/* // </Link> */}

    </>
  )
}

export { ProductItem }
