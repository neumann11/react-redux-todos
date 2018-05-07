import React, { Component } from 'react';
import Todo from "./Todo"

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Eat", "Sleep", "Go Home"]
    };
  }
  render(){
    let todos = this.state.todos.map((task, index) => (
      <Todo task={task} key={index} />
    ));
    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}
