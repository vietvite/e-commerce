import { REFRESH_BANNER } from "./constants";

export const updateListBanner = listBanner => ({
  type: REFRESH_BANNER,
  payload: listBanner
})