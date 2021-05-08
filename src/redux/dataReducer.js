const SET_DATA = "SET_DATA";
const SET_CARD_TYPE = "SET_CARD_TYPE";
const ADD_TO_CART = "ADD_TO_DESTRUCTION_CART";
const DELETE_FROM_CART = "DELETE_FROM_DESTRUCTION_CART";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  data: [],
  cart: [],
  cardType: {},
  isFetching: true,
};

export default function dataReducer(state = initialState, action) {
  let cartItem;
  let existedItem;

  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case SET_CARD_TYPE:
      return {
        ...state,
        cardType: action.payload,
      };

    case ADD_TO_CART:
      cartItem = state.data.find((item) => item.gameID === action.id);
      existedItem = state.cart.find((item) => (item ? item.gameID === action.id : null));
      return {
        ...state,
        cart: existedItem ? [...state.cart] : [...state.cart, cartItem],
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.id)],
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
}

export const setData = (data) => ({ type: SET_DATA, payload: data });

export const setCardType = (dataType) => ({ type: SET_CARD_TYPE, payload: dataType });

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
  id,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});
