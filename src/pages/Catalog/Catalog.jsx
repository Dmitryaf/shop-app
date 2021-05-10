import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Product from "../../components/Product/Product";

import "./Catalog.scss";

function Catalog() {
  const data = useSelector((state) => state.dataReducer.data);

  return (
    <div className="catalog">
      <h1 className="title">Catalog</h1>
      <div className="catalog__link">
        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>
      </div>

      {data.length > 0 ? (
        <div className="catalog__content">
          {data.map((item) => {
            return <Product key={item.id} data={item} />;
          })}
        </div>
      ) : (
        <div className="catalog__empty">Catalog is empty</div>
      )}
    </div>
  );
}

export default Catalog;
