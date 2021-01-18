import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav";
import store from "./Redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Route path="/" exact component={Header} />
        <Route path="/Cart" exact component={Cart} />
      </Router>
    </Provider>
  );
}

export default App;
