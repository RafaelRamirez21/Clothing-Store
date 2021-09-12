import React from 'react';
import { ProductItem } from './ProductItem';
import '../../assets/styles/ProductsList.scss';

function ProductList({ value }) {

  return (
    <section className="container__products">
      {value.map((item, index) => (<ProductItem value={item} key={index} />))}
    </section>
  )
};


export default ProductList;
