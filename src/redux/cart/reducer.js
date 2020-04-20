import { ADD_CART, REMOVE_CART, UPDATE_QUANTITY } from "./constants";

const initCart = [
  {
    id: '01',
    title: 'Sáu Người Đi Khắp Thế Gian (Tập 2) - Tái Bản',
    url: '/product/id',
    imageUrl: 'https://salt.tikicdn.com/cache/175x175/media/catalog/product/s/a/sau_nguoi_di_khap_the_gian_1.u2487.d20161213.t111359.194106.jpg',
    price: 5190000,
    seller: {
      username: 'shopusername',
      fullname: 'Shop name'
    },
    quantity: 1,
  },
  {
    id: '02',
    title: 'Sáu Người Đi Khắp Thế Gian (Tập 1) - Tái Bản',
    url: '/product/id',
    imageUrl: 'https://salt.tikicdn.com/cache/175x175/media/catalog/product/s/a/sau_nguoi_di_khap_the_gian_1.u2487.d20161213.t111359.194106.jpg',
    price: 5190000,
    seller: {
      username: 'shopusername',
      fullname: 'Shop name'
    },
    quantity: 3,
  },
]
const initState = {
  list: initCart,
  favorites: [],
  orderLater: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_CART:
      return Object.assign({}, state, {
        list: [
          action.payload,
          ...state.list
        ]
      })

    case UPDATE_QUANTITY:
      return Object.assign({}, state, {
        list: state.list.map(
          product =>
            product.id === action.id
              ? { ...product, quantity: action.quantity }
              : product)
      })

    case REMOVE_CART:
      return Object.assign({}, state, {
        list: state.list.filter(product => product.id !== action.id)
      })

    default:
      return state
  }
}