import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Conditions from "./Conditions/Conditions";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <>
        <div className="weather-container container-fluid">
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/forecast"
              render={() => <Conditions initialState={this.state} />}
            />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
