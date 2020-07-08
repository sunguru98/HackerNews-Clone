import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import TopStories from "./components/TopStories";
import StoryDetail from "./components/StoryDetail";

// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={routeProps => (
            <TopStories {...routeProps} storiesPerPage={20} />
          )}
        />
        <Route path="/news/:newsId" exact component={StoryDetail} />
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
