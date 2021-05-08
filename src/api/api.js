import axios from "axios";
import { setCardType, setData, toggleIsFetching } from "../redux/dataReducer";

export function getApiData() {
  const apiUrl = "https://www.cheapshark.com/api/1.0/deals?pageSize=10&";

  return async (dispatch) => {
    try {
      const response = await axios(`${apiUrl}`);
      const data = await response.data;
      dispatch(toggleIsFetching(false));
      dispatch(setData(data));
      dispatch(toggleIsFetching(true));
    } catch (e) {
      throw new Error(e);
    }
  };
}

export function getCardType(inputValue) {
  const apiUrl = `https://api.cardinfo.online?input=${inputValue}&apiKey=df64d04456a001cbeb54367c948742b3`;

  return async (dispatch) => {
    try {
      const response = await axios(`${apiUrl}`);
      const data = await response.data;
      dispatch(setCardType(data));
    } catch (e) {
      throw new Error(e);
    }
  };
}
