import { Provider } from "react-redux";
import store from "./store/store";
import AuthNavbar from "./components/organisms/AuthNavbar";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Create from "./components/pages/Create";
import Feedback from "./components/organisms/Feedback";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/create">
                <AuthNavbar />
                <Create />
              </Route>
              <Route path="/feedback">
                <Feedback />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
