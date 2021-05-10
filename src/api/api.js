import axios from "axios";

import { setCardType } from "../redux/dataReducer";

function getCardType(inputValue) {
  const apiUrl = `https://api.cardinfo.online?input=${inputValue}&apiKey=df64d04456a001cbeb54367c948742b3`;

  return async (dispatch) => {
    try {
      const response = await axios(`${apiUrl}`, {
        headers: { "Access-Control-Allow-Headers": "*" },
      });
      const data = await response.data;
      dispatch(setCardType(data));
    } catch (e) {
      throw new Error(e);
    }
  };
}

export default getCardType;
