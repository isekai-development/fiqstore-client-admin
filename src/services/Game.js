import axios from "axios";

export default class Game {
  getGames() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/game/list`).then((res) => res.data);
  }
  addGame(state) {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/game/add`, { ...state })
      .then((res) => res.data);
  }
}
