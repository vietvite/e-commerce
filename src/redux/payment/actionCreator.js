import { PaymentService } from "../../api/account";
import { setAddress, setAccountDetail } from "./action";

export const getAddressRequest = () =>
  dispatch =>
    PaymentService.getAddress()
      .then(res => {
        dispatch(setAddress(res.data))
      })

export const updateDeliveryInfoRequest = deliveryInfo =>
  dispatch => {
    const address = {
      provinceOrCity: deliveryInfo.provinceOrCity,
      districtOrTown: deliveryInfo.districtOrTown,
      subDistrictOrVillage: deliveryInfo.subDistrictOrVillage,
      detailAddress: deliveryInfo.detailAddress,
    }
    console.log({ address });

    const userInfo = {
      fullname: deliveryInfo.fullname,
      phoneNumber: deliveryInfo.phoneNumber,
    }

    PaymentService.updateAddress(address)
      .then(res => dispatch(setAddress(res.data)))

    PaymentService.updateAccount(userInfo)
      .then(res => dispatch(setAccountDetail(res.data)))
  }

export const accountDetailRequest = () =>
  dispatch =>
    PaymentService.getAccountDetail()
      .then(res => {
        console.log({ data: res })

        dispatch(setAccountDetail(res.data))
      })

