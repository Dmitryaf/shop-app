import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputMask from "react-input-mask";

import { resetCardType } from "../../redux/dataReducer";
import getCardType from "../../api/api";

import "./CardBank.scss";

function CardBank() {
  const dispatch = useDispatch();
  const cardType = useSelector((state) => state.dataReducer.cardType);

  const [cardData, setCardData] = useState({
    holder: "Name Lastname",
    number: "0000 0000 0000 0000",
    validity: "00/00",
  });

  const {
    bankColor,
    formBankLogoBigSvg,
    brandLogoOriginalSvg,
    bankName,
    brandName,
    formTextColor,
  } = cardType;

  const onChangeNumber = (e) => {
    const { value } = e.target;
    const cardBIK = value.slice(0, 7).replace(/\s/g, "");
    setCardData({
      ...cardData,
      number: value,
    });
    dispatch(getCardType(cardBIK));
  };

  const onChangeHolder = (e) => {
    const { value } = e.target;
    setCardData({
      ...cardData,
      holder: value,
    });
  };

  const onChangeValidity = (e) => {
    const { value } = e.target;
    setCardData({
      ...cardData,
      validity: value,
    });
  };

  useEffect(() => {
    return () => {
      dispatch(resetCardType());
    };
  }, [dispatch]);

  return (
    <form className="card-bank">
      <div
        className="card-bank__front"
        style={{ backgroundColor: bankColor, color: formTextColor }}
      >
        {formBankLogoBigSvg ? (
          <img className="card-bank__logo" src={formBankLogoBigSvg} alt={bankName} />
        ) : (
          <div className="card-bank__logo-empty">Logo</div>
        )}

        <div className="card-bank__info">
          <div className="card-bank__number">{cardData.number || "0000 0000 0000 0000"}</div>
          <div className="card-bank__bottom">
            <div className="card-bank__data">
              <div className="card-bank__data-label">Card Holder</div>
              <div className="card-bank__data-value">{cardData.holder}</div>
            </div>
            <div className="card-bank__data">
              {brandLogoOriginalSvg ? (
                <img className="card-bank__brand" src={brandLogoOriginalSvg} alt={brandName} />
              ) : (
                <div className="card-bank__brand-empty">Brand</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card-bank__fields">
        <div className="card-bank__field">
          <div className="card-bank__label">
            <span className="card-bank__label-text">Card Number</span>
            <InputMask
              mask="9999 9999 9999 9999"
              maskPlaceholder={null}
              className="card-bank__input"
              onChange={onChangeNumber}
              value={cardData.number}
              placeholder="Enter card number"
            />
          </div>
        </div>
        <div className="card-bank__field">
          <div className="card-bank__label" htmlFor="card-bank__input-holder">
            <span className="card-bank__label-text">Card Holder</span>
            <InputMask
              maskPlaceholder={null}
              className="card-bank__input"
              onChange={onChangeHolder}
              value={cardData.holder}
              placeholder="Enter card holder"
              maxLength={20}
            />
          </div>
        </div>
      </div>
      <div className="card-bank__secure">
        <div className="card-bank__secure-item">
          <div className="card-bank__secure-label" htmlFor="card-bank__secure-date">
            <span className="card-bank__secure-text">Validity</span>
            <InputMask
              mask="99/99"
              maskPlaceholder={null}
              className="card-bank__secure-input"
              placeholder="MM/YY"
              value={cardData.validity}
              onChange={onChangeValidity}
            />
          </div>
        </div>
        <div className="card-bank__secure-item">
          <div className="card-bank__secure-label" htmlFor="card-bank__secure-code">
            <span className="card-bank__secure-text">CVV</span>
            <InputMask
              className="card-bank__secure-input"
              mask="999"
              maskPlaceholder={null}
              placeholder="999"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default CardBank;
