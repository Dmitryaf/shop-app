import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { calculateTotalPrice } from "../../redux/dataReducer";
import CardBank from "../../components/CardBank/CardBank";
import CartItem from "../../components/CartItem/CartItem";

import "./Cart.scss";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.dataReducer.cart);
  const totalPrice = useSelector((state) => state.dataReducer.totalPrice);

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [dispatch]);

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
        <div className="cart__list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return <CartItem key={item.id} data={item} />;
            })
          ) : (
            <div className="cart__list-empty">Cart is empty</div>
          )}
          {cartItems.length > 0 && (
            <div className="cart__bottom">
              <div className="cart__total">Total: {totalPrice}$</div>
              <button type="button" className="btn btn_lg">
                Buy
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
