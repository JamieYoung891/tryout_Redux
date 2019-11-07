import React from "react";
import FilteredTodoList from "./FilteredTodoList";
import CreateTodo from "./CreateTodo"
import UpdateFilter from "./UpdateFilter";

const App = () => {
  return (
    <div className="App">
      <CreateTodo />
      <FilteredTodoList />
      <UpdateFilter />
    </div>
  )
}

export default App