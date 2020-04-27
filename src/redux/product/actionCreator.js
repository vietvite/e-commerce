import ProductService from "../../api/product";
import {
  receiveListProduct,
  sendingRequest,
  loadMore,
  setSortCondition,
  setFilter,
  receiveProductDetail,
  addProduct,
} from "./action";

export const getHomeProductSection = () => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.getHomeProductSection().then((res) => {
    dispatch(receiveListProduct([...res.data]));
  });
};

export const loadMoreCreator = (filter, sortCondition, page) => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.getProduct(filter, sortCondition, page).then((res) => {
    dispatch(loadMore([...res.data]));
  });
};

export const getProduct = (filter, sortCondition, page = 1) => (dispatch) => {
  dispatch(sendingRequest());
  dispatch(setSortCondition(sortCondition));
  dispatch(setFilter(filter));
  return ProductService.getProduct(filter, sortCondition, page).then((res) => {
    dispatch(receiveListProduct([...res.data]));
  });
};

export const getProductDetail = (productId) => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.findById(productId).then((res) => {
    dispatch(receiveProductDetail(res.data));
  });
};

export const addNewProduct = (listProduct) => (dispatch) => {
  return dispatch(addProduct(listProduct));
};

export const getProductOfShop = () => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.getProductOfShop().then((res) => {
    dispatch(receiveListProduct([...res.data]));
  });
};
