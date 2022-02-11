import axios from "axios";

export const getApi = async () => {
  const response = await axios.get(
    `http://api.currencylayer.com/live?access_key=${process.env.REACT_APP_CURRENCYLAYER_API_KEY}`
  );

  return response.data;
};
