import * as actionTypes from './shopping-types';

const initialState = {
  products: [
    {
      category: "blusas",
      products: [{
        "name": "Blusas v1",
        "id": "blusas_v1",
        "path": "/blusas/",
        "price": 45.000,
        "image": "https://images.unsplash.com/photo-1562571437-2f40b6baa3c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80",
        "category": "blusas"
      },
      {
        "name": "Blusas v2",
        "id": "blusas_v2",
        "path": "/blusas/",
        "price": 45.000,
        "image": "https://images.unsplash.com/photo-1562571437-2f40b6baa3c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80",
        "category": "blusas"
      },

      {
        "name": "Blusas v3",
        "id": "blusas_v3",
        "path": "/blusas/",
        "price": 45.000,
        "image": "https://images.unsplash.com/photo-1562571437-2f40b6baa3c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80",
        "category": "blusas"
      },
      {
        "name": "Blusas v4",
        "id": "blusas_v4",
        "path": "/blusas/",
        "price": 45.000,
        "image": "https://images.unsplash.com/photo-1562571437-2f40b6baa3c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80",
        "category": "blusas"
      }]
    },

    {
      category: "pantalones",
      products: [
        {
          "name": "Pantalon v1",
          "path": "/pantalones/",
          "id": "pantalon_v1",
          "price": 45.000,
          "image": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          "category": "pantalones"
        },
        {
          "name": "Pantalon v2",
          "id": "pantalon_v2",
          "path": "/pantalones/",
          "price": 45.000,
          "image": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          "category": "pantalones"
        },

        {
          "name": "Pantalon v3",
          "id": "pantalon_v3",
          "path": "/pantalones/",
          "price": 45.000,
          "image": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          "category": "pantalones"
        },
        {
          "name": "Pantalon v4",
          "id": "pantalon_v4",
          "path": "/pantalones/",
          "price": 45.000,
          "image": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          "category": "pantalones"
        }]
    },
    {
      category: "vestidos",
      products: [
        {
          "name": "Vestido v1",
          "id": "vestido_v1",
          "path": "/vestidos/",
          "price": 45.000,
          "image": "https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          "category": "vestidos"
        },
        {
          "name": "Vestido v2",
          "id": "vestido_v2",
          "path": "/vestidos/",
          "price": 45.000,
          "image": "https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          "category": "vestidos"
        },

        {
          "name": "Vestido v3",
          "id": "vestido_v3",
          "path": "/vestidos/",
          "price": 45.000,
          "image": "https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          "category": "vestidos"
        },
        {
          "name": "Vestido v4",
          "id": "vestido_v4",
          "path": "/vestidos/",
          "price": 45.000,
          "image": "https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          "category": "vestidos"
        }
      ]
    }],
  cart: [],
}

const shopReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const prods = state.products.find((category) => category.category === action.payload.category);
      const item = prods.products.find(prod => prod.id === action.payload.id);
      const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
      return {
        ...state,
        cart: inCart ? state.cart.map(
          item => item.id === action.payload.id ?
            { ...item, qty: item.qty + 1 } : item)
          : [...state.cart, { ...item, qty: 1 }],
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)
      }
    default:
      return state;
  }
}
export default shopReducer;