import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import CreateJobHeader from "./components/pages/CreateJobPosting/CreateJobHeader";
import TechRequirements from "./components/pages/CreateJobPosting/TechRequirements";
import ContactDetails from "./components/pages/CreateJobPosting/ContactDetails";
import JobDetail from "./components/pages/CreateJobPosting/JobDetail";
import Review from "./components/pages/CreateJobPosting/Review";
import { mockJobDetailData, mockTechStackData, mockJobPosting } from "./models/mockData";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
       <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create1">
           <CreateJobHeader />
          </Route>
          <Route path="/create2">
           <TechRequirements data={mockTechStackData}/>
          </Route>
          <Route path="/create3">
           <JobDetail data={mockJobDetailData}/>
          </Route>
          <Route path="/create4">
            <ContactDetails />
          </Route>
          <Route path="/create5">
            <Review data={mockJobPosting} />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
    </Router>
      </header>
    </div>
  );
}

export default App;
