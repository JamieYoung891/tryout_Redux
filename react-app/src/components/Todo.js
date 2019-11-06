import React from 'react'

const Todo = ({ date, state, text }) => (
  <li className="todo-item">
    <div className="todo-item-date">{date}</div>
    <div className="todo-item-text">{text}</div>
    <div className="todo-item-state">{state}</div>
  </li>
)

export default Todo