import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AllTodos = () => {
  const [todos, setTodos] = useState(undefined);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);
  useEffect(()=>console.log(todos), [todos])
  return <div>these are multiple todos</div>;
};

export default AllTodos;
