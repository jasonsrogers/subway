import React from 'react';

import { Provider } from 'react-redux'
import store from "./redux/store";
import { Router, Link } from "@reach/router"

import OrderForm from './OrderForm'

import UserPage from './UserPage'
import Home from './Home'
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Link to="/">Home</Link>
      <Router>
        <Home path="/" />
        <UserPage path="/:userId" />
      </Router>
    </Provider>
  );
}

export default App;
