import axios from "axios";
import { setData, toggleIsFetching } from "../redux/dataReducer";

const apiUrl = "https://www.cheapshark.com/api/1.0/deals?pageSize=10&";

function getApiData() {
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

export default getApiData;
