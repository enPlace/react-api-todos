import { useParams } from "react-router";

const Todo = () => {
  const { id } = useParams();
  return <div>{`this is a single todo with the id of ${id} `}</div>;
};

export default Todo;
