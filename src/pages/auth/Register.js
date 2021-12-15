import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault()
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp : true,
    }

    await auth.sendSignInLinkToEmail(email,config);
    toast.success(`Email is sent to ${email},Click the link to Complete your registration`);
    //User Email is stored in Local-Storage
    window.localStorage.setItem('emailForRegistration',email)
    //clear state
    setEmail("");
    console.log("Working")
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />

      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='"row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register</h4>
          {/* <ToastContainer/> */}
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
