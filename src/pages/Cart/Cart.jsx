import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getCardType } from "../../api/api";
import CardBank from "../../components/BankCard/CardBank";

import "./Cart.scss";

function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.dataReducer.cart);

  return (
    <div className="cart">
      <h1 className="title">Cart</h1>
      <div className="cart__link">
        <NavLink to="/catalog" className="nav-link">
          Catalog
        </NavLink>
      </div>
      <div className="card__content">
        <div className="cart__bank">
          <CardBank />
        </div>
      </div>
    </div>
  );
}

export default Cart;
