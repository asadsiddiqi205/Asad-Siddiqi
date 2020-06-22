import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App7 from "./App7";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import Home from "./Home";
import Cart from "./Cart";
import Admin from "./Admin";
import Admin_update from "./Admin_update";
import Admin_new from "./Admin_new";
class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={App7}></Route>
            <Route path='/signup' exact component={App3}></Route>
            <Route path='/items' exact component={App4}></Route>
            <Route path='/additem' exact component={App5}></Route>
            <Route path='/cart' exact component={Cart}></Route>
            <Route path='/admin' exact component={Admin}></Route>
            <Route path='/adminedit' exact component={Admin_update}></Route>
            <Route path='/adminnew' exact component={Admin_new}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Main;
