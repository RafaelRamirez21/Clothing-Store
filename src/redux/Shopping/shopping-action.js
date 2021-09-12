import * as actionTypes from './shopping-types';
export const addToCart = (itemID, itemCategory) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
      category: itemCategory
    }
  }
};

export const removeFromCart = (itemID, itemCategory) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
      category: itemCategory
    }
  }
};
export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
};