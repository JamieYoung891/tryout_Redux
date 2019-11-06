import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo =>
      <Todo {...todo}></Todo>
    )}
  </ul>
)

export default TodoList