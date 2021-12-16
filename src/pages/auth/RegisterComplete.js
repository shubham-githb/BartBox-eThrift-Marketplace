import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const RegisterComplete = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useState(()=>{
      setEmail(window.localStorage.getItem('emailForRegistration'))
  },[])


  const handleSubmit =async (e) => {
    e.preventDefault()
   
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
