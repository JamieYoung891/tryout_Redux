import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, dispatchUpdate }) => (
  <ul className="todo-list">
    {
      (() => {
        const todoEls = []
        for (const key in todos)
          todoEls.push(<Todo key={key} todo={todos[key]} dispatchUpdate={dispatchUpdate} />);
        return todoEls
      })()
    }
  </ul>
)

export default TodoList