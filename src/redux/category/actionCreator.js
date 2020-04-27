import { CategoryService } from "../../api/category";
import { replaceListCategory } from "./action";

export const getCategoryRequest = () =>
  dispatch =>
    CategoryService.all()
      .then(res => dispatch(replaceListCategory([...res.data])))

export const fetchCategoryIfNeeded = () =>
  (dispatch, getStore) =>
    !getStore().category.length && dispatch(getCategoryRequest())