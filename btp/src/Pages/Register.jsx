import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProfessor, setIsProfessor] = useState(false);
  const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsProfessor(!isProfessor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isProfessor){
     await axios.post('http://10.10.120.28/api/auth/registerProfessor', {
        email:email,
        pname:name,
        password:password
      })
      .then(function (response) {
        navigate("/login")
        toast.success("Login succesfully");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      await axios.post('http://10.10.120.28/api/auth/registerStudent', {
        email:email,
        sname:name,
        spassword:password
      })
      .then(function (response) {
        toast.success("Login succesfully");
        setTimeout(()=>3000)
        navigate("/login")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    // Handle form submission here
    // toast.success("Register succesfully");

  };

  return (
    <div className="login-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <input
            type="name"
            placeholder="Username"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
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
          <Link to="/login">Login</Link>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
