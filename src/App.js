import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { rrfProps } from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import "./App.css";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
            <div className="App">
              <AppNavbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/client/add" component={AddClient} />
                  <Route exact path="/client/:id" component={ClientDetails} />
                  <Route exact path="/client/edit/:id" component={EditClient} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
