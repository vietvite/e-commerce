import { GET_CATEGORY } from "./constants";

const initialState = {
  categoryList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return Object.assign({}, state, {
        categoryList: action.payload.categoryList,
      });
    default:
      return state;
  }
};
