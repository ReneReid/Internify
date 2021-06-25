import { Provider } from 'react-redux';
import store from './store/store';
import AuthNavbar from "./components/organisms/AuthNavbar";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import ContactDetails from "./components/pages/CreateJobPosting/ContactDetails";
import JobDetail from "./components/pages/CreateJobPosting/JobDetail";
import Review from "./components/pages/CreateJobPosting/Review";
import Create from './components/pages/Create';
import Feedback from './components/organisms/Feedback'
import { mockJobDetailData, mockJobPosting } from "./models/mockData";
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
          <Route path="/create">
          <AuthNavbar />
           <Create />
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
