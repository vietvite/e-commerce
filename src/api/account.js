import http from "./http";

export const AccountService = {
  getAddress: () => http().get(`/account/address`),
  getAccountDetail: address => http().get(`/account`),
  updateAccount: account => http().post(`/account`, { ...account }),
  updateAddress: address => http().post(`/account/address`, { ...address }),
  addCustomerBill: bill => http().post(`/bill`),
  addSellerBill: (sellerId, bill) => http().post(`/shop/pending/${sellerId}`, { ...bill }),
}