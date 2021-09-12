import React from 'react';
import categories from '../../database/categories.json';
import { ListCategoriesItems } from './ListCategoriesItems';
import '../../assets/styles/Categories.scss';



function ListCategories() {


  return (
    <>
      <h2 className="category_section">Categorias</h2>
      <hr className="hr" />
      <br />
      <section className="container__categories">
        {categories.map((category, id) => (
          <ListCategoriesItems key={id} value={category} />
        ))
        }
      </section>


    </>
  )
}

export { ListCategories }
