import Landing from "./old-components/pages/Landing";
import Login from "./old-components/pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/home">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
           <h2>Hello from create page</h2>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
