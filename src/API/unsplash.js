import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0Bm4aWVtUMt8vvYBZAXCTgEabegZX6xSc69bc2SSRAQ",
  },
});
