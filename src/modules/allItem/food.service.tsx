import axios from "axios";

export default class FoodServices {
  static async getAll() {
    const res = await axios.get("http://localhost:8000/food");
    return res.data;
  }
}
