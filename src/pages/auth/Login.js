import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(email,password);
 
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />
</div>
    <div className="form-group">
    <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
        // autoFocus
      />

    </div>

      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='"row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Login</h4>
          {/* <ToastContainer/> */}
          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
