import axios from "axios";

export const getApi = async () => {
  const proxyAddress =
    "https://sixted-proxy-cors-anywhere.herokuapp.com/" +
    "http://api.currencylayer.com/live?access_key=" +
    process.env.REACT_APP_CURRENCYLAYER_API_KEY;

  const response = await axios.get(proxyAddress, {
    mode: "cors",
  });

  return response.data;
};
