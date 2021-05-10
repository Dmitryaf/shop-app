import React from "react";
import { useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  calculateTotalPrice,
  deleteFromCart,
} from "../../redux/dataReducer";

import "./CartItem.scss";

function CartItem(props) {
  const dispatch = useDispatch();

  const { data } = props;
  const { title, price, id, quantity } = data;

  const increaseCount = () => {
    dispatch(increaseQuantity(id));
    dispatch(calculateTotalPrice());
  };

  const decreaseCount = () => {
    dispatch(decreaseQuantity(id));
    dispatch(calculateTotalPrice());
  };

  const deleteItem = () => {
    dispatch(deleteFromCart(id));
    dispatch(calculateTotalPrice());
  };

  const calculatePrice = () => {
    return (price * quantity).toFixed(2);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__name">{title}</div>
      <div className="cart-item__info">
        <div className="cart-item__counter">
          <button type="button" className="cart-item__btn" onClick={decreaseCount}>
            -
          </button>
          <input type="text" readOnly className="cart-item__count" value={quantity} />
          <button type="button" className="cart-item__btn" onClick={increaseCount}>
            +
          </button>
        </div>
        <div className="cart-item__price">{calculatePrice()}$</div>
        <button type="button" className="btn btn_red" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
