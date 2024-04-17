import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useAuth } from '../context/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProfessor, setIsProfessor] = useState(false);
  const navigate = useNavigate()
  const [auth, setAuth] = useAuth();
  // const handleLogin = () => {
  //   if (isProfessor)

  //   else

  // }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsProfessor(!isProfessor);
  };
  // console.log(isProfessor)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isProfessor) {
      try {
        const res = await axios.post('http://localhost:4000/api/auth/loginProfessor', {
          email: email,
          password: password
        });
        // console.log(res.data.user);
        if (res && res.data.success) {

          // console.log(res.data.token);
          toast.success("Login succesfully");
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem('auth', JSON.stringify(res.data));
          navigate("/faculty/dashboard")
          console.log(auth);
        }
        else {
          toast.error(res.data.message);
        }
      }
      catch (err) {
        console.log(err)
      }
    }
    else {
      try {
        const res = await axios.post('http://localhost:4000/api/auth/loginStudent', {
          email: email,
          password: password
        });
        // console.log(res.data.user);
        if (res && res.data.success) {

          // console.log(res.data.token);
          toast.success("Login succesfully");
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem('auth', JSON.stringify(res.data));
          navigate("/faculty/dashboard")
          console.log(auth);
        }
        else {
          toast.error(res.data.message);
        }
      }
      catch (err) {
        console.log(err)
      }
    }

    // Handle form submission here
    // toast.success("Login succesfully");
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="check">
          <label htmlFor="professorCheckbox">
            Professor?
          </label>
          <input
            id="professorCheckbox"
            type="checkbox"
            checked={isProfessor}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="links">
          {/* <a href="#">Forgot Password?</a> */}
          <Link to="/register">Register</Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
