import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from '../../firebase'
import {toast} from 'react-toastify'


// import 'react-toastify/dist/ReactToastify.css'

const RegisterComplete = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
      setEmail(window.localStorage.getItem('emailForRegistration'))
  },[])

  const UserValidation = (email,password) =>{
    if(!email || !password) {
      toast.error('Email and password is required')
      return;
    }
    if(password.length < 6){
      toast.error("Password must be of atleast 6 characters");
      return;
    }
  }


  const handleSubmit =async (e) => {
    e.preventDefault();
    UserValidation(email,password);
    try{
      const result = await auth.signInWithEmailLink(email,window.location.href);
      if(result.user.emailVerified===true){
        // remove user email from the local storage
        window.localStorage.removeItem('emailForRegistration')
        //get user id token
        let user = auth.currentUser
        await user.updatePassword(password);
        const idTokenResult = await auth.getIdTokenResult();
        console.log('USER ---->', user);
        console.log('id token --->', idTokenResult);

        //redux store
        //redirect
        // history.push('/')
      }
    }
    // console.log(result)
    catch(error){
      toast.error(error.message)

    }
   
  };

  const completeRegisterForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled
      />

      {/* </br> */}

      <br/>

    <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        autoFocus
        // disabled
      />

      <button type="submit" className="btn btn-raised">
       Complete Register
      </button>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='"row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register Complete</h4>
          {/* <ToastContainer/> */}
          {completeRegisterForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
