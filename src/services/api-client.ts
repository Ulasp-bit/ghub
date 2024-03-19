import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8a39df5e9c154d08aa345593bd896b98",
  },
});
