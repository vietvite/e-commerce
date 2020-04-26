import { BannerService } from "../../api/banner";
import { updateListBanner } from "./action";

export const getBanner = () =>
  dispatch =>
    BannerService.all()
      .then(res => dispatch(updateListBanner([...res.data])))

export const fetchBannerIfNeeded = () =>
  (dispatch, getState) =>
    shouldFetchBanner(getState()) && dispatch(getBanner())

function shouldFetchBanner(state) {
  return state.banner.length ? false : true
}
