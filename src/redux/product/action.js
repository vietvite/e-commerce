import {
  UPDATE_LIST_PRODUCT,
  FETCHING,
  LOAD_MORE,
  SORT_PRODUCT,
  SET_FILTER,
  GET_PRODUCT_DETAIL,
  RECEIVE_PRODUCT_DETAIL,
} from "./constants";

export const sendingRequest = () => ({
  type: FETCHING,
  payload: {
    fetching: true,
  },
});
export const receiveListProduct = (listProduct) => ({
  type: UPDATE_LIST_PRODUCT,
  payload: {
    list: listProduct,
    fetching: false,
  },
});

export const loadMore = (listProduct) => ({
  type: LOAD_MORE,
  payload: {
    list: listProduct,
    fetching: false,
  },
});

export const setSortCondition = (sortCondition) => ({
  type: SORT_PRODUCT,
  payload: {
    sortCondition,
  },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});

export const receiveProductDetail = (product) => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: {
      product,
      fetching: false,
    },
  };
};
