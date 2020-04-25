import { ADD_FAVORITE, REMOVE_FAVORITE } from "./constants";

const initState = [
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
export default (state = initState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload]
    case REMOVE_FAVORITE:
      return [...state.filter(x => x.id !== action.payload)]

    default:
      return state
  }
}