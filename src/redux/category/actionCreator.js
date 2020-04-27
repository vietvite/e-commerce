import { CategoryService } from "../../api/category";
import { getCategory } from "./actions";

export const getCategoryList = () => (dispatch) => {
  return CategoryService.all().then((res) => {
    dispatch(getCategory(res.data));
  });
};
