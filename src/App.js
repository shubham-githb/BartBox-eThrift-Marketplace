import React from "react";
import {Switch,Route} from 'react-router-dom'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/Register" component = {Register} />
      </Switch>
    </>
  );
}

export default App;
