import React, { Component } from "react";
import axios from "axios";
import "./form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      name: "",
      price: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  updateProduct = () => {
    axios
      .put(`http://localhost:3005/api/product/${this.props.selected}`, {
        product_name: this.state.name,
        product_price: this.state.price,
        product_img: this.state.url
      })
      .then(response => {
        this.props.getReq();
      });
  };

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.setState({
        url: "change",
        name: "name",
        price: 3
      });
    }
  };

  handleClick() {
    this.setState({
      url: "",
      name: "",
      price: 0
    });
  }

  addProduct = () => {
    this.setState({
      selected: null
    });
    axios
      .post("http://localhost:3005/api/product", {
        product_name: this.state.name,
        product_price: this.state.price,
        product_img: this.state.url
      })
      .then(response => {
        this.props.getReq();
        this.handleClick();
      });
  };

  render() {
    return (
      <div className="form-cont">
        <input
          value={this.state.url}
          type="text"
          onChange={e => this.setState({ url: e.target.value })}
        />
        <input
          value={this.state.name}
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input
          value={this.state.price}
          type="text"
          onChange={e => this.setState({ price: parseInt(e.target.value) })}
        />
        <button onClick={this.handleClick}>Cancel</button>
        <button
          onClick={this.addProduct}
          className={this.state.url !== "change" ? "show" : "hidden"}
        >
          Add to Inventory
        </button>
        <button
          className={this.state.url === "change" ? "show" : "hidden"}
          onClick={this.updateProduct}
        >
          Save Changes
        </button>
      </div>
    );
  }
}
