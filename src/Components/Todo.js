import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Todo = () => {
  const { id } = useParams();
  const [task, setTask] = useState(undefined);
  const { title, completed } = task || {};
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const response = res.data;
        setTask(response);
      });
  }, [id]);

  useEffect(() => {
    console.log(task);
  }, [task]);

  return !task ? (
    <CircularProgress />
  ) : (
    <div
      style={ 
        
        !completed
          ? { color: "red", backgroundColor: "gray" }
          : { color: "green", backgroundColor: "lightGray" }
      }
    >
      <h1>
        The task "{title}" has {!completed ? "NOT" : ""} been completed
      </h1>
    </div>
  );
};

export default Todo;
