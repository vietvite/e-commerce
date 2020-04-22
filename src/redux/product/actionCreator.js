import ProductService from "../../api/product";
import { receiveListProduct, sendingRequest, loadMore } from "./action";

export const searchProduct = (title) => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.findByTitle(title).then((res) =>
    dispatch(receiveListProduct([...res.data]))
  );
};

export const getHomeProductSection = () => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.getHomeProductSection().then((res) => {
    dispatch(receiveListProduct([...res.data]));
  });
};

export const getProductByCategory = (categoryId) => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.getProductByCategory(categoryId).then((res) => {
    dispatch(receiveListProduct([...res.data]));
  });
};

export const loadMoreCreator = (categoryId, page) => (dispatch) => {
  dispatch(sendingRequest());
  return ProductService.loadMore(categoryId, page).then((res) => {
    dispatch(loadMore([...res.data]));
  });
};
