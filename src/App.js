import React,{useEffect} from "react";
import {Switch,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import RegisterComplete from "./pages/auth/RegisterComplete";
import Header from "./components/nav/Header";
import {auth} from "./firebase"
import { useDispatch } from "react-redux";


const App = () => {

  const dispatch = useDispatch();

  // TO CHECK FIREBASE auth STATE
  // User Auth State management

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) =>{
      if(user){
        const idTokenResult = await user.getIdTokenResult();
        console.log('CURRENT ACTIVE user ----->' ,user)
        dispatch ({
          type : 'LOGGED_IN_USER',
          payload : {
            email: user.email,
            token : idTokenResult.token,
          }
        })
      }
    });

    return () => unsubscribe();
  },[])

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
