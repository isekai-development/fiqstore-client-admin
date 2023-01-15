import axios from "axios";

export default class Product {
  getVouchers(gameId) {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/voucher/list`).then((res) => res.data);
  }
  addVoucher(state) {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/voucher/add`, { ...state })
      .then((res) => res.data);
  }
}
