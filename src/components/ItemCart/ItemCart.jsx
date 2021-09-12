import React, { useState, useEffect } from 'react';
import '../../assets/styles/ItemCart.scss'
import CartCard from './CartCard';
import { connect } from 'react-redux'

function ItemCart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const numeroparawp = 573014671037;

  useEffect(() => {
    let countItems = 0;
    let countPrices = 0;
    cart.forEach(element => {
      countItems += element.qty
      countPrices += element.price * element.qty;
    });
    setTotalPrice(countPrices)
    setTotalItem(countItems)
  }, [totalPrice, cart, setTotalItem, setTotalPrice, totalItem])

  const product = () => {
    let text = []
    cart.forEach(pro => text.push([pro.name, pro.qty]))
    console.log(text)
    return text
  }


  return (
    <>
      <div className="cart">
        <div className="cart__items">

          {cart.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>
        <div className="cart__summary">
          <h4 className="summary__title">Resumen de su compra</h4>
          <div className="summary__price">
            <span>TOTAL: {totalItem} productos</span>
            <span>$ {totalPrice}.000</span>
          </div>

          <a className="waplink" href={`https://api.whatsapp.com/send?phone=${numeroparawp}&text=Hola, gracias por comprar en Kochanie! El resumen de tu compra es:\n ${product()}\n Cantidad de productos:${totalItem}\n Precio total:${totalPrice}`}>
            <button className="summary__checkoutBtn">
              Confirmar orden
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(ItemCart)
