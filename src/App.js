import React from "react";
import {  BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import {Profile} from './pages/Profile/Profile.js'
import "./App.css";

// Components
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";

// Your Pages
const Profile = React.lazy(() => import("./pages/Profile/Profile.js"));
const Analysis = React.lazy(() => import("./pages/Analysis/Analysis"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route path="/profile" render={props => <Profile {...props} />} />
          <Route
            path="/analysis/:title"
            render={props => <Analysis {...props} />}
          /> */}
          {/* Redirect
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          {/* 404 */}
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}
