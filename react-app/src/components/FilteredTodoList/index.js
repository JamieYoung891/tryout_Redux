import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TodoList from './TodoList'
import { FILTERS_STATE } from '../../store/modules/filters'
import { updateTodo, TODOS_STATE } from '../../store/modules/todos'

const { STATE } = FILTERS_STATE

export default function FilteredTodoList() {
  const [filters, todos] = useSelector(({ filters, todos }) => [filters, todos]);
  let filteredTodos;

  switch (filters.state) {
    case STATE.TODO:
    case STATE.DONE:
    case STATE.PEND:
      filteredTodos = Object.keys(todos)
        .filter(key => todos[key].state === filters.state)
        .map(key => todos[key])
      break;
    default: filteredTodos = { ...todos };
  }

  const dispatch = useDispatch();
  const dispatchUpdate = {
    state: {
      TODO: (todoId) => dispatch(updateTodo.state(todoId, TODOS_STATE.TODO)),
      DONE: (todoId) => dispatch(updateTodo.state(todoId, TODOS_STATE.DONE)),
      PEND: (todoId) => dispatch(updateTodo.state(todoId, TODOS_STATE.PEND))
    },
    updateText: (todoId, payload) => dispatch(updateTodo.text(todoId, payload))
  }

  return (
    <TodoList todos={filteredTodos} dispatchUpdate={dispatchUpdate}></TodoList>
  )
}