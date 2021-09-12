import React from 'react';
import '../../assets/styles/Categories.scss';
import { Link } from 'react-router-dom'

function ListCategoriesItems({ value }) {

  return (
    <>
      <div onClick={() => console.log('click', value)} className="category">
        <Link className="links" to={
          value.index === 1 ? '/blusas' : value.index === 2 ? '/vestidos' : '/pantalones'}>
          <img className="category__img" src={value.image} alt="" />
          <h2>{value.name}</h2>
        </Link>
      </div>
    </>
  )
}

export { ListCategoriesItems }
