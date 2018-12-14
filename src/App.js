import React, { Component } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      product: null
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3005/api/inventory").then(response => {
      this.setState({
        inventory: response.data
      });
    });
  };

  handleUpdate = id => {
    this.setState({
      product: id
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Dashboard
          inventory={this.state.inventory}
          getRequest={this.componentDidMount}
          handleUpdate={this.handleUpdate}
        />
        {/* {routes} */}
        <Form getReq={this.componentDidMount} selected={this.state.product} />
      </div>
    );
  }
}

export default App;
