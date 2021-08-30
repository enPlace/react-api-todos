import { useHistory } from "react-router";
const TodoCard = ({ todo }) => {
  const { id, title, completed } = todo;
  let history = useHistory();
  return (
          
    <div
      style={{
        backgroundColor: "Lightgrey",
        margin: "10px",
        padding: "10px",
        width: "150px",
        borderRadius: "10px",
      }}
      onClick={() => history.push(`/react-api-todos/${id}`)}
    >
      <h3>Task:</h3>
      <h5>{title}</h5>
      <h6>{`Completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
