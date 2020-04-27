import { GET_CATEGORY } from "./constants";

export const getCategory = (categoryList) => {
  return {
    type: GET_CATEGORY,
    payload: {
      categoryList,
    },
  };
};
