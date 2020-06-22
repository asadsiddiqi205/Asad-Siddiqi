import React from "react";
import Header3 from "./Header3";
import { Link, withRouter } from "react-router-dom";
class App5 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      description: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("type") !== "Admin") {
      this.props.history.push("/");
    }
  }
  submithandler() {
    fetch("http://localhost:5000/insert", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
      }),
    });
  }
  handlechange(event) {
    const { name, value, checked, type } = event.target;
    event.target.type == "checkbox"
      ? this.setState({ [event.target.name]: event.target.checked })
      : this.setState({
          [event.target.name]: event.target.value,
        });
  }

  render() {
    return (
      <div>
        <Header3></Header3>
        <input
          type='text'
          value={this.state.name}
          name='name'
          placeholder='name'
          onChange={this.handlechange}
        />
        <input
          type='text'
          value={this.state.price}
          name='price'
          placeholder='price'
          onChange={this.handlechange}
        />
        <input
          type='text'
          value={this.state.description}
          name='description'
          placeholder='description'
          onChange={this.handlechange}
        />
        {this.state.name}
        {this.state.price}
        {this.state.description}
        <br></br>
        <button onClick={this.submithandler}>Enter item</button>
      </div>
    );
  }
}
export default App5;
