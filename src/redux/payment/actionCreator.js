import { PaymentService } from "../../api/account";
import { setAddress, setAccountDetail, setPendingBill, setPaidBill } from "./action";

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

export const getPendingBill = () => dispatch => {
  return PaymentService.getPendingBill().then(res => {
    dispatch(setPendingBill(res.data));
  })
}

export const acceptPendingBill = (billId) => dispatch => {
  return PaymentService.acceptPendingBill(billId).then(res => {
    dispatch(getPendingBill());
  })
}

export const getPaidBill = () => dispatch => {
  return PaymentService.getPaidBill().then(res => {
    dispatch(setPaidBill(res.data));
  })
}

export const denyPendingBill = () => dispatch => {
  return PaymentService.denyPendingBill().then(res => {
    dispatch(getPendingBill());
  })
}
