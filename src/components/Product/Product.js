import React from "react";
import "./product.css";

export default function Product(props) {
  return (
    <div className="product-cont">
      <img src={props.image} alt="" />
      <div>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
      </div>
      <button onClick={() => props.delete(props.id)}>Delete</button>
      <button onClick={() => props.update(props.id)}>Edit</button>
    </div>
  );
}
