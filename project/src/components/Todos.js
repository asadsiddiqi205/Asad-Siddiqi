import React, { Component } from 'react';
import { render } from 'react-dom';
class Todos extends Component{
    render(){
return this.props.Todos.map((todo) => (
    <h3>{todo.title}</h3>



))
    }
}


export default Todos;
