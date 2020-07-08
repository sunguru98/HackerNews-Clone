import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TopStories from "./components/TopStories";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={routeProps => <TopStories {...routeProps} />}
        />
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
