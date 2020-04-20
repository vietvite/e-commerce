import { BannerService } from "../../api/banner";
import { updateListBanner } from "./action";

export const getBanner = () =>
  dispatch =>
    BannerService.all()
      .then(res => dispatch(updateListBanner([...res.data])))