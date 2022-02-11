import axios from "axios";
import { EXCHANGE_API_URL } from "./constants";

export const getApi = async () => {
  const response = await axios.get(EXCHANGE_API_URL);

  return response.data;
};
