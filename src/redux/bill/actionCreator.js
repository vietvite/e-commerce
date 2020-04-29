import { AccountService } from "../../api/account";
import { setBill } from "./action";

export const getBillRequest = () =>
  dispatch =>
    AccountService.getCustomerBill()
      .then(res =>
        dispatch(setBill([...res.data])))