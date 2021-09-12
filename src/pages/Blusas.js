import React from 'react'
import { TemplateCategories } from './TemplateCategories';
import BlusasData from '../database/blusas.json';
import { connect } from 'react-redux';
function Blusas({ blusas }) {
  return (

    <TemplateCategories value="Blusas" data={blusas} />

  )
};

const mapStateToProps = state => {
  return {
    blusas: state.shop.products[0].products,
  }
}


export default connect(mapStateToProps)(Blusas);
