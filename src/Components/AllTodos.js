import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import TodoCard from "./TodoCard";

const AllTodos = () => {
  const [todos, setTodos] = useState(undefined);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);
  useEffect(() => console.log(todos), [todos]);

  return !todos ? (
    <CircularProgress></CircularProgress>
  ) : (
    <div className="todoList">
      <h1>Todo List-- All</h1>
      <div
        className="cardContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {todos.map((todo) => (
          <TodoCard todo={todo} key = {todo.id} />
        ))}
      </div>
    </div>
  );
};

export default AllTodos;
