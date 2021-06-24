import { Provider } from 'react-redux';
import store from './store/store';

import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import CreateJobHeader from "./components/pages/CreateJobPosting/CreateJobHeader";
import TechRequirements from "./components/pages/CreateJobPosting/TechRequirements";
import JobDetail from "./components/pages/CreateJobPosting/JobDetail";
import Create from './components/pages/Create';
import { mockJobDetailData, mockTechStackData } from "./models/mockData";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
          <Route path="/create1">
           <Create />
          </Route>
          <Route path="/create2">
           <TechRequirements data={mockTechStackData}/>
          </Route>
          <Route path="/create3">
           <JobDetail data={mockJobDetailData}/>
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
