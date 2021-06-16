import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import CreateJobHeader from "./components/pages/CreateJobPosting/CreateJobHeader";
import TechRequirements from "./components/pages/CreateJobPosting/TechRequirements";
import ContactDetails from "./components/pages/CreateJobPosting/ContactDetails";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const mockTechStackData = {
  "languages": ["Java", "JavaScript", "C++", "C"],
  "frameworks": ["React", "Angular", "HTML", "CSS"],
  "workTools": ["Jira", "Asana", "Confluence", "Notion"],
  "csConcepts": ["Object Oriented Programming", "Functional Programming", "Recursion"],
};

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
          <Route path="/create4">
            <ContactDetails />
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
