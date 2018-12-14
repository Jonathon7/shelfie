import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  deleteProduct = id => {
    axios.delete(`http://localhost:3005/api/product/${id}`).then(response => {
      this.props.getRequest();
    });
  };

  render() {
    let dispProducts = this.props.inventory.map((product, index) => {
      console.log(this.props);
      return (
        <Product
          key={index}
          image={product.product_img}
          price={product.product_price}
          name={product.product_name}
          delete={this.deleteProduct}
          id={product.id}
          update={this.props.handleUpdate}
        />
      );
    });

    return <div>{dispProducts}</div>;
  }
}
