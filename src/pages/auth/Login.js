import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {auth,googleAuthProvider} from '../../firebase'
import {toast} from 'react-toastify'
import { Button } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
// import 'react-toastify/dist/ReactToastify.css'

const Login = ({history}) => {


  const [email, setEmail] = useState("shubhamaother@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] =useState(false);
  let dispatch = useDispatch()

  const handleSubmit =async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email,password);
    try{
      const result =await auth.signInWithEmailAndPassword(email,password);
      console.log('RESULTS=',result);
      const {user} = result
      const idTokenResult = await user.getIdTokenResult();
      dispatch ({
        type : 'LOGGED_IN_USER',
        payload : {
          email: user.email,
          token : idTokenResult.token,
        }
      });
      history.push('/');
    }
    catch(error){
      console.log(error);
      toast.error(error.message)
      setLoading(false);
    }
 
  };

  const googleLogin=() => {
    auth.signInWithPopup(googleAuthProvider)
    .then(async (results)=>{
        const {user} = results
        const idTokenResult = await user.getIdTokenResult();
        dispatch ({
          type : 'LOGGED_IN_USER',
          payload : {
            email: user.email,
            token : idTokenResult.token,
          }
        })
        .catch((err)=>{
          console.log(err)
          
        })

    })
  }

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

      <Button
        onClick={handleSubmit}
        type="primary"
        className = "mb-3"
        block
        // icon = {MailOutlined}
        size="large"
        disabled={!email || password.length<6}
      >
        Login with email and password
      </Button>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='"row'>
        <div className='col-md-6 offset-md-3'>
          {loading ? (
            <h4>Login</h4>
          ) : (
            <h4 className='text-danger'>Loading...Pls Wait...</h4>
          )}
          {/* <ToastContainer/> */}
          {loginForm()}
          <Button
            onClick={googleLogin}
            type='primary'
            className='mb-3'
            block
            // shape="round"
            icon = {googleLogin}
            size='large'
            // disabled={!email || password.length < 6}
          >
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
