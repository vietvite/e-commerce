import ProductService from "../../api/product";
import {
  receiveListProduct,
  sendingRequest,
  loadMore,
  setSortCondition,
  setFilter,
} from "./action";

// export const searchProduct = (title) => (dispatch) => {
//   dispatch(sendingRequest());
//   return ProductService.findByTitle(title).then((res) =>
//     dispatch(receiveListProduct([...res.data]))
//   );
// };

export const getHomeProductSection = () => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.getHomeProductSection().then((res) => {
    dispatch(receiveListProduct([...res.data]));
  });
};

// export const getProductByCategory = (categoryId) => (dispatch) => {
//   dispatch(sendingRequest());
//   return ProductService.getProductByCategory(categoryId).then((res) => {
//     dispatch(receiveListProduct([...res.data]));
//   });
// };

export const loadMoreCreator = (filter, sortCondition, page) => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.getProduct(filter, sortCondition, page).then((res) => {
    dispatch(loadMore([...res.data]));
  });
};

// export const sortProduct = (categoryId, sortCondition) => (dispatch) => {
//   dispatch(sendingRequest());
//   return ProductService.sortProduct(categoryId, sortCondition).then((res) => {
//     dispatch(receiveListProduct([...res.data]));
//     dispatch(setSortCondition(sortCondition));
//   });
// };

export const getProduct = (filter, sortCondition, page = 1) => (dispatch) => {
  dispatch(sendingRequest());
  dispatch(setSortCondition(sortCondition));
  dispatch(setFilter(filter));
  return ProductService.getProduct(filter, sortCondition, page).then((res) => {
    dispatch(receiveListProduct([...res.data]));
  });
};
