import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCardType } from "../../api/api";

import "./CardBank.scss";

function CardBank() {
  const dispatch = useDispatch();
  const cardType = useSelector((state) => state.dataReducer.cardType);

  const [cardData, setCardData] = useState({
    cardHolder: "Name Lastname",
    cardNumber: "0000 0000 0000 0000",
    cardValidity: "00/00",
    cardCVV: "000",
  });

  const { bankColor, formBankLogoBigSvg, bankName, formTextColor } = cardType;

  const onChangeHolder = (e) => {
    const { value } = e.target;
    setCardData({
      ...cardData,
      cardHolder: value,
    });
  };

  const onChangeNumber = (e) => {
    const { value } = e.target;
    const cardBIK = value.slice(0, 6);
    setCardData({
      ...cardData,
      cardNumber: value,
    });
    dispatch(getCardType(cardBIK));
  };

  return (
    <form className="card-bank">
      <div
        className="card-bank__front"
        style={{ backgroundColor: bankColor, color: formTextColor }}
      >
        {formBankLogoBigSvg && (
          <img className="card-bank__logo" src={formBankLogoBigSvg} alt={bankName} />
        )}

        <div className="card-bank__info">
          <div className="card-bank__number">{cardData.cardNumber}</div>
          <div className="card-bank__bottom">
            <div className="card-bank__data">
              <div className="card-bank__data-label">Card Holder</div>
              <div className="card-bank__data-value">{cardData.cardHolder}</div>
            </div>
            <div className="card-bank__data">
              <div className="card-bank__data-label">Validity</div>
              <div className="card-bank__data-value">MM/YY</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-bank__fields">
        <div className="card-bank__field">
          <label className="card-bank__label" htmlFor="card-bank__input-number">
            <span className="card-bank__label-text">Card Number</span>
            <input
              className="card-bank__input"
              id="card-bank__input-number"
              type="text"
              placeholder="Enter card number"
              onChange={onChangeNumber}
              value={cardData.cardNumber}
              maxLength={19}
            />
          </label>
        </div>
        <div className="card-bank__field">
          <label className="card-bank__label" htmlFor="card-bank__input-holder">
            <span className="card-bank__label-text">Card Holder</span>
            <input
              className="card-bank__input"
              id="card-bank__input-holder"
              type="text"
              placeholder="Enter card holder"
              onChange={onChangeHolder}
              value={cardData.cardHolder}
              maxLength={30}
            />
          </label>
        </div>
      </div>
      <div className="card-bank__secure">
        <div className="card-bank__secure-item">
          <label className="card-bank__secure-label" htmlFor="card-bank__secure-date">
            <span className="card-bank__secure-text">Validity</span>
            <input
              className="card-bank__secure-input"
              id="card-bank__secure-date"
              type="text"
              placeholder="MM/YY"
            />
          </label>
        </div>
        <div className="card-bank__secure-item">
          <label className="card-bank__secure-label" htmlFor="card-bank__secure-code">
            <span className="card-bank__secure-text">CVV</span>
            <input
              className="card-bank__secure-input"
              id="card-bank__secure-code"
              type="text"
              placeholder="999"
            />
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn_lg btn_center">
        Pay
      </button>
    </form>
  );
}

export default CardBank;
