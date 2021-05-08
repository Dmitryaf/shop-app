import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Product from "../../components/Product/Product";
import Preloader from "../../components/common/Preloader/Preloader";
import { getApiData } from "../../api/api";

import "./Catalog.scss";

function Catalog() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataReducer.data);
  const isFetching = useSelector((state) => state.dataReducer.isFetching);

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  return (
    <div className="catalog">
      <h1 className="title">Catalog</h1>
      <div className="catalog__link">
        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>
      </div>

      {isFetching && <Preloader />}
      {data.length > 0 ? (
        <div className="catalog__content">
          {data.map((item) => {
            return <Product key={item.gameID} data={item} />;
          })}
        </div>
      ) : (
        <div className="catalog__empty">Catalog is empty</div>
      )}
    </div>
  );
}

export default Catalog;
