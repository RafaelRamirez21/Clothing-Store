import React from 'react';
import { TemplateCategories } from './TemplateCategories';
import { connect } from 'react-redux';
function Pantalones({ pantalones }) {



  return (
    <>
      <TemplateCategories value="Pantalones" data={pantalones} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    pantalones: state.shop.products[1].products,

  }
}


export default connect(mapStateToProps)(Pantalones);

