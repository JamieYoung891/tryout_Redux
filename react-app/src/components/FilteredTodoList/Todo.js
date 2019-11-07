import React from 'react'
import { TODOS_STATE } from '../../store/modules/todos'

const Todo = ({ todo: { id, date, state, text }, dispatchUpdate }) => {
  date = new Date(date);
  date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}시`
  return (
    <li className="todo-item"
      onClick={() => {
        switch (state) {
          case TODOS_STATE.TODO:
            dispatchUpdate.state.DONE(id);
            break;
          case TODOS_STATE.DONE:
            dispatchUpdate.state.TODO(id);
            break;
          default: break;
        }
      }}
    >
      <div className="todo-item-date">{date}</div>
      <div className="todo-item-text">{text}</div>
      <div className="todo-item-state">{state}</div>
    </li >
  )
}

export default Todo