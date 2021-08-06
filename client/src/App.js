import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AuthNavbar from "./components/organisms/AuthNavbar";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Create from "./components/pages/Create";
import Profile from "./components/pages/Profile";
import Edit from "./components/pages/Edit";
import Footer from "./components/organisms/Footer";
import View from "./components/pages/View";
import Home from "./components/pages/Home";
import Prefill from "./components/pages/Prefill";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  });

  let routes;
  if (user) {
    routes = (
      <Switch>
        <Route path="/home">
          <AuthNavbar />
          <Home user={user}/>
          <Footer />
        </Route>
        <Route path="/profile">
          <AuthNavbar />
          <Profile user={user} />
          <Footer />
        </Route>
        <Route path="/selection">
          <AuthNavbar />
          <Prefill />
          <Footer absolute={true}/>
        </Route>
        <Route path="/create">
          <AuthNavbar />
          <Create />
          <Footer />
        </Route>
        <Route path="/view/:slug">
          <AuthNavbar />
          <View user={user} authenticated={true}/>
          <Footer />
        </Route>
        <Route path="/edit/:slug">
          <AuthNavbar />
          <Edit />
          <Footer />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/view/:slug">
          <View authenticated={false}/>
          <Footer />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Router>{routes}</Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
