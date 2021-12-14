import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <button type="submit" className="btn btn-raised">Register as {email} </button>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='"row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
