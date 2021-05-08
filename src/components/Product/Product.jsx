import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../redux/dataReducer";
import "./Product.scss";

function Product(props) {
  const dispatch = useDispatch();

  const { data } = props;
  const { gameID: id, title, normalPrice: price, thumb: img } = data;

  const addCart = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div className="product">
      <img src={img} alt={title} className="product__img" />
      <h2 className="product__title">{title}</h2>
      <div className="product__price">{price} $</div>
      <button type="button" onClick={() => addCart(id)} className="btn btn_w100">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
