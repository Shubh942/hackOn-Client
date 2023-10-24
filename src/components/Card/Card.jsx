/* eslint-disable react/prop-types */

import "./Card.scss";

const Card = ({
  product,
  thumbnail,
  title,
  description,
  price,
  rating,
  handleClick,
}) => {
  return (
    <div className="card">
      <img src={thumbnail} alt="" />
      <div>{title}</div>
      <div className="desc">{description}</div>
      <div className="data">
        <p>{price}</p>
        <p>{rating} ⭐</p>
      </div>

      <button
        onClick={() => {
          handleClick(product);
        }}
      >
        Add to cart🛒
      </button>
    </div>
  );
};

export default Card;
