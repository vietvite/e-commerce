import { AccountService } from "../../api/account";
import { setAddress, setAccountDetail } from "./action";
import { push } from "connected-react-router";
import { fetchCart } from "../cart/action";

export const getAddressRequest = () =>
  dispatch =>
    AccountService.getAddress()
      .then(res => {
        return dispatch(setAddress(res.data))
      })

export const updateDeliveryInfoRequest = () =>
  (dispatch, getState) => {
    const address = {
      provinceOrCity: getState().payment.deliveryInfo.provinceOrCity,
      districtOrTown: getState().payment.deliveryInfo.districtOrTown,
      subDistrictOrVillage: getState().payment.deliveryInfo.subDistrictOrVillage,
      detailAddress: getState().payment.deliveryInfo.detailAddress
    }
    const userInfo = {
      fullname: getState().payment.deliveryInfo.fullname,
      phoneNumber: getState().payment.deliveryInfo.phoneNumber,
    }

    AccountService.updateAccount(userInfo)
      .then(res => dispatch(setAccountDetail(res.data)))

    return AccountService.updateAddress(address)
      .then(res => {
        console.log({ setADDRED_OK: res });

        dispatch(setAddress(res.data))
      })

  }

export const accountDetailRequest = () =>
  dispatch =>
    AccountService.getAccountDetail()
      .then(res => {
        console.log({ data: res })

        dispatch(setAccountDetail(res.data))
      })

export const addBillRequest = () =>
  (dispatch, getState) => {
    const address = {
      provinceOrCity: getState().payment.deliveryInfo.provinceOrCity,
      districtOrTown: getState().payment.deliveryInfo.districtOrTown,
      subDistrictOrVillage: getState().payment.deliveryInfo.subDistrictOrVillage,
      detailAddress: getState().payment.deliveryInfo.detailAddress
    }
    const bill = {
      listProduct: getState().cart.list,
      deliveryAddress: address,
    }
    AccountService.addBill(bill)
      .then(res => {
        console.log('======================================');
        console.log({ res });

        dispatch(push('/'))
        dispatch(fetchCart())
      })
  }

