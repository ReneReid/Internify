import { Provider } from "react-redux";
import store from "./store/store";
import AuthNavbar from "./components/organisms/AuthNavbar";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Create from "./components/pages/Create";
import Feedback from "./components/organisms/Feedback";
import { EditModal } from "./components/molecules/index";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

function App() {
  // TODO: Replace the following with your app's Firebase project configuration
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  const firebaseConfig = {
    apiKey: "AIzaSyDXJD3MLG5x1gCLn1jZpS7v4mL7EnK4Lnc",
    authDomain: "internify-8202d.firebaseapp.com",
    projectId: "internify-8202d",
    storageBucket: "internify-8202d.appspot.com",
    messagingSenderId: "1050189046886",
    appId: "1:1050189046886:web:ff58ab36247021e6f4b9a7",
    measurementId: "G-TJSRK7EK13",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let user = firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    return user;
  });

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router>
            {user ? (
              <Switch>
                <Route path="/edit">
                  <EditModal toggle={true} />
                </Route>
                <Route path="/create">
                  <AuthNavbar />
                  <Create />
                </Route>
                <Route path="/feedback">
                  <Feedback />
                </Route>
                <Redirect to="/create" />
              </Switch>
            ) : (
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <Landing />
                </Route>
                <Redirect to="/" />
              </Switch>
            )}
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
