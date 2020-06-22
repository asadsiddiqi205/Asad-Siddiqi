import React from "react";
import Header from "./Header";
class Home extends React.Component {
  componentDidMount() {
    localStorage.clear("tok");
    localStorage.clear("type");
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <img
            src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            style={{ position: "relative", left: "180px" }}
          />
        </div>
      </div>
    );
  }
}
export default Home;
