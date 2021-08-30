import "./App.css";
import AllTodos from "./Components/AllTodos";
import Todo from "./Components/Todo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/react-api-todos" children = {<AllTodos/>}></Route>
          <Route exact path ="/react-api-todos/:id" children = {<Todo/>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
