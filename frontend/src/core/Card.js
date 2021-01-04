import React from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";

//TODO: deal with this later
let isAuthenticated = true;

const Card = ({ product, reload = undefined }) => {
  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescription = product ? product.description : "Default description";
  const cartPrice = product ? product.sell_price : "Default";
  const cartState = product ? product.state : "Default State";

  const buyProduct = () => {
    if (isAuthenticated && cartState == "lucknow") {
      alert("Purchased!");
    } else {
      alert("Login");
    }
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
        <br />
        <p className="btn btn-success rounded  btn-sm px-4">
          Available In {cartState}
        </p>
        <div className="row">
          <div className="col-12">
            <button
              onClick={() => {
                buyProduct();
              }}
              className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
