import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../redux/dataReducer";
import "./Product.scss";

function Product(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.dataReducer.cart);

  const { data } = props;
  const { id, title, price, image } = data;

  const inCart = cart.find((item) => item.id === id);

  const addCart = () => {
    dispatch(addToCart(id));
  };

  return (
    <div className="product">
      <img src={image} alt={title} className="product__img" />
      <h2 className="product__title">{title}</h2>
      <div className="product__price">{price}$</div>
      <button type="button" onClick={addCart} className={`btn ${inCart ? "btn_disabled" : ""}`}>
        {inCart ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
}

export default Product;
