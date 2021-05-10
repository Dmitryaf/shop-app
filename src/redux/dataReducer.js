const SET_CARD_TYPE = "SET_CARD_TYPE";
const RESET_CARD_TYPE = "RESET_CARD_TYPE";
const ADD_TO_CART = "ADD_TO_DESTRUCTION_CART";
const DELETE_FROM_CART = "DELETE_FROM_DESTRUCTION_CART";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const CALCULATE_TOTAL_PRICE = "CALCULATE_TOTAL_PRICE";

const initialState = {
  data: [
    {
      title: "Monster Slayers",
      id: 1,
      price: 8.1,
      image: "https://steamcdn-a.akamaihd.net/steam/apps/496620/capsule_sm_120.jpg?t=1533784859",
      quantity: 1,
    },
    {
      title: "Millennium 2",
      id: 2,
      price: 13,
      image: "https://images-na.ssl-images-amazon.com/images/I/41i9Ym3lGWL._SL160_.jpg",
      quantity: 1,
    },
    {
      title: "RunGunJumpGun",
      id: 3,
      price: 7.55,
      image:
        "https://images.greenmangaming.com/76fdbaf79df241108691ca38f040b5f5/325ea9a2de964d4db4eca59a265055eb.jpg",
      quantity: 1,
    },
    {
      title: "System Shock 2",
      id: 4,
      price: 9.2,
      image: "https://steamcdn-a.akamaihd.net/steam/apps/238210/capsule_sm_120.jpg?t=1532995907",
      quantity: 1,
    },
    {
      title: "Fractured Space: Ultimate Skins Pack",
      id: 5,
      price: 12.45,
      image: "https://www.gamersgate.com/media/products/profile/132203/180_259.jpg",
      quantity: 1,
    },
    {
      title: "Panzer Corps",
      id: 6,
      price: 19.99,
      image: "https://steamcdn-a.akamaihd.net/steam/apps/268400/capsule_sm_120.jpg?t=1533634979",
      quantity: 1,
    },
    {
      title: "Breach and Clear: Deadline",
      id: 7,
      price: 17.88,
      image:
        "https://images.greenmangaming.com/87dfbc0dde1a424aa2e739c8c91f4157/e8f05b4e9a78407bbb29a1f1c8c170b7.jpg",
      quantity: 1,
    },
    {
      title: "Shadowgrounds Survivor",
      id: 8,
      price: 14.3,
      image: "https://steamcdn-a.akamaihd.net/steam/apps/11200/capsule_sm_120.jpg?t=1476272913",
      quantity: 1,
    },
  ],
  cart: [],
  cardType: {},
  totalPrice: 0,
};

export default function dataReducer(state = initialState, action) {
  let cartItem;
  let existedItem;

  switch (action.type) {
    case SET_CARD_TYPE:
      return {
        ...state,
        cardType: action.payload,
      };

    case RESET_CARD_TYPE:
      return {
        ...state,
        cardType: {},
      };

    case ADD_TO_CART:
      cartItem = state.data.find((item) => item.id === action.id);
      existedItem = state.cart.find((item) => (item ? item.id === action.id : null));
      return {
        ...state,
        cart: existedItem ? [...state.cart] : [...state.cart, cartItem],
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.id)],
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: [
          ...state.cart.filter((item) => {
            if (item.id === action.id) {
              item.quantity += 1;
            }
            return item;
          }),
        ],
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: [
          ...state.cart.filter((item) => {
            if (item.id === action.id && item.quantity > 1) {
              item.quantity -= 1;
            }
            return item;
          }),
        ],
      };

    case CALCULATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.cart
          .reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)
          .toFixed(2),
      };

    default:
      return state;
  }
}

export const setCardType = (dataType) => ({ type: SET_CARD_TYPE, payload: dataType });

export const resetCardType = () => ({ type: RESET_CARD_TYPE });

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
  id,
});

export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  id,
});

export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  id,
});

export const calculateTotalPrice = () => ({
  type: CALCULATE_TOTAL_PRICE,
});
