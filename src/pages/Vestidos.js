import React from 'react';
import { TemplateCategories } from './TemplateCategories';
import { connect } from 'react-redux';

function Vestidos({ vestidos }) {
  return (
    <>
      <TemplateCategories value="Vestidos" data={vestidos} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    vestidos: state.shop.products[2].products,
  }
}


export default connect(mapStateToProps)(Vestidos);
