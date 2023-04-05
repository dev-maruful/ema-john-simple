import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, price, name, quantity } = product;

  return (
    <div className="review-item">
      <div className="item-details">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>
            Price : <span className="color-yellow">${price}</span>
          </p>
          <p>
            Quantity : <span className="color-yellow">{quantity}</span>
          </p>
        </div>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className="dlt-btn">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItem;
