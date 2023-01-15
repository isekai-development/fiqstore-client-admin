import axios from "axios";

export default class Transaction {
  listOrder() {
    return axios
      .get(`${import.meta.env.VITE_PUBLIC_API_URL}/transaction/list`)
      .then((res) => res.data);
  }
}
