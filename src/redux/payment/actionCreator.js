import { AccountService } from "../../api/account";
import { setAddress, setAccountDetail, setPendingBill, setPaidBill } from "./action";
import { push } from "connected-react-router";
import { fetchCart } from "../cart/action";
import { PaymentService } from "../../api/account";

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

    const listProduct = getState().cart.list || []

    const listSellerBills = listProduct.reduce((listBills, product) =>
      checkExistSeller(listBills, product.seller.id)
        ? pushProductToRightSeller(listBills, product)
        : createSeller(listBills, product)
      , [])

    const customerBillRequest = AccountService.addCustomerBill()
    const sellerBillRequests = listSellerBills.map(bill =>
      AccountService.addSellerBill(bill.sellerId, bill))

    Promise.all([customerBillRequest, ...sellerBillRequests])
      .then(([customerBillRequest, ...sellerBillRequests]) => {
        dispatch(push('/'))
        dispatch(fetchCart())
      })

    function checkExistSeller(listBill = [], sellerId) {
      return listBill.map(bill => bill.sellerId).includes(sellerId)
    }

    function pushProductToRightSeller(listBills = [], product) {
      return listBills.map(bill =>
        bill.sellerId === product.seller.id
          ? { ...bill, listProduct: [...bill.listProduct, product] }
          : bill
      )
    }

    function createSeller(listBills = [], product) {
      return [
        ...listBills,
        createBill(product)
      ]
    }

    function createBill(product) {
      return {
        sellerId: product.seller.id,
        listProduct: [product],
        deliveryAddress: address
      }
    }
  }

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

export const denyPendingBill = (billId) => dispatch => {
  return PaymentService.denyPendingBill(billId).then(res => {
    dispatch(getPendingBill());
  })
}
