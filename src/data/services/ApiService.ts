import axios from "axios";

const url = "https://salty-citadel-55102.herokuapp.com";

export const ApiService = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});
