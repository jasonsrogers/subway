import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import { Router } from "@reach/router";

import AppNavbar from "./AppNavbar";
import UserPage from "./UserPage";
import OrderPage from "./OrderPage";
import Home from "./Home";
import "./App.css";

import styled from "styled-components";

const Content = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

/**
 * Root of app includes:
 * redux setup
 * Reach router set up and routes
 */
function App() {
  return (
    <Provider store={store}>
      <AppNavbar />
      <Content>
        <Router>
          <Home path="/" />
          <OrderPage path="/order/:userId" />
          <UserPage path="/user/:userId" />
        </Router>
      </Content>
    </Provider>
  );
}

export default App;
