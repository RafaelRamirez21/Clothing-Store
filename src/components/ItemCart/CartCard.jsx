import React, { useState } from 'react';
import '../../assets/styles/CartCard.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../../redux/Shopping/shopping-action'

function CartCard({ item, removeFromCart, adjustQty }) {
  const [input, setInput] = useState(item.qty)
  const onChangeHandler = (e) => {
    setInput(e.target.value)
    adjustQty(item.id, e.target.value)
  }

  return (
    <>
      <div className="cartItem">
        <img
          className="cartItem__image"
          src={item.image}
          alt="title"
        />
        <div className="cartItem__details">
          <p className="details__title">{item.name} </p>

          <div className="cartItem__qty">
            <p className="details__price">${item.price}.000</p>
            <div className="details__amount">
              <label htmlFor="qty">Cantidad</label>
              <input
                min="1"
                type="number"
                id="qty"
                name="qty"
                value={input}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="actions__deleteItemBtn"
          >
            <AiOutlineDelete size={'1.2rem'} />
          </button>
        </div>

      </div>



    </>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value))
  };
}
export default connect(null, mapDispatchToProps)(CartCard);
