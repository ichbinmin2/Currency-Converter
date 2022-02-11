import axios from "axios";

export const getApi = async () => {
  const response = await axios.get(
    `http://api.currencylayer.com/live?access_key=8c38ebcb39cff7ea5acf4ba6cb2da569`
  );

  return response.data;
};
