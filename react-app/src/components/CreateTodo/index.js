import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/modules/todos'

export default function CreatTodo() {
  const dispatch = useDispatch()
  const dispatchCreateTodo = payload => dispatch(createTodo(payload))
  let payload;

  return (
    <form className="todo-create"
      onSubmit={e => {
        e.preventDefault()
        dispatchCreateTodo(payload.value)
      }}
    >
      <input className="todo-create-text"
        type="text"
        ref={node => payload = node}
      />
      <button type="submit">submit</button>
    </form>
  )
}