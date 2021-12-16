import React from "react";
import {Switch,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import RegisterComplete from "./pages/auth/RegisterComplete";
import Header from "./components/nav/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  return (
    <>
      <Header/>
      <ToastContainer/>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/Register" component = {Register} />
        <Route exact path = "/Register/complete" component = {RegisterComplete} />
      </Switch>
    </>
  );
}

export default App;
