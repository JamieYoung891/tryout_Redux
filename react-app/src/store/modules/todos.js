export const TODOS_ACTION = {
  CREATE: 'todo/CREATE',
  UPDATE_STATE: 'todo/UPDATE_STATE',
  UPDATE_TEXT: 'todo/UPDATE_TEXT',
  DELETE: 'todo/DELETE'
}
export const TODOS_STATE = {
  TODO: 'TODO',
  DONE: 'DONE',
  PEND: 'PEND',
}

let todoId = 0



export const createTodo = payload => ({
  type: TODOS_ACTION.CREATE,
  todoId: todoId++,
  date: Date.now(),
  state: TODOS_STATE.TODO,
  payload
})
export const updateTodo = {
  state: (todoId, payload) => ({ type: TODOS_ACTION.UPDATE_STATE, todoId, payload }),
  text: (todoId, payload) => ({ type: TODOS_ACTION.UPDATE_STATE, todoId, payload })
}
export const deleteTodo = todoId => ({ type: TODOS_ACTION.DELETE, todoId })



export default function todos(state = {}, action) {

  const newState = object => ({ ...state, [action.todoId]: object })

  switch (action.type) {
    case TODOS_ACTION.CREATE:
      return newState({
        date: action.date,
        state: action.state,
        text: action.payload
      })
    case TODOS_ACTION.UPDATE_STATE:
      return newState({
        ...state[action.todoId],
        state: action.payload
      })
    case TODOS_ACTION.UPDATE_TEXT:
      return newState({
        ...state[action.todoId],
        text: action.payload
      })
    case TODOS_ACTION.DELETE:
      const { [action.todoId]: removedTodo, ...remainedTodo } = state
      return { ...remainedTodo }
    default:
      return state;
  }
}