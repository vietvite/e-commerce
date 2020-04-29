import http from "./http";

export const AccountService = {
  getAddress: () => http().get(`/account/address`),
  getAccountDetail: address => http().get(`/account`),
  updateAccount: account => http().post(`/account`, { ...account }),
  updateAddress: address => http().post(`/account/address`, { ...address }),
  addCustomerBill: bill => http().post(`/bill`),
  getCustomerBill: () => http().get(`/bill`),
  addSellerBill: (sellerId, bill) => http().post(`/shop/pending/${sellerId}`, { ...bill }),
  getPendingBill: () => http().get('/shop/pending'),
  acceptPendingBill: (billId) => http().post(`/shop/bill/${billId}`),
  getPaidBill: () => http().get('/shop/history'),
  denyPendingBill: (billId) => http().delete(`/shop/bill/${billId}`)
}
