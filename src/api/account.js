import http from "./http";

export const PaymentService = {
  getAddress: () => http().get(`/account/address`),
  getAccountDetail: address => http().get(`/account`),
  updateAccount: account => http().post(`/account`, { ...account }),
  updateAddress: address => http().post(`/account/address`, { ...address }),

  getPendingBill: () => http().get('/shop/pending'),
  acceptPendingBill: () => http().post('/shop/bill/{billId}'),
  getPaidBill: () => http().get().get('/shop/history'),
  denyPendingBill: () => http().delete('/shop/bill/{billId}')
}
