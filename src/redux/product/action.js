import {
  UPDATE_LIST_PRODUCT,
  FETCHING,
  LOAD_MORE,
  SORT_PRODUCT,
  GET_SORT_CONDITION,
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

export const getSortCondition = () => ({ type: GET_SORT_CONDITION });
