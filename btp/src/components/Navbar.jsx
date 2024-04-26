import React from 'react'
import './Navbar.css'
import 'boxicons'
import { useAuth } from '../context/auth'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {

  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''

    })
    localStorage.removeItem('auth');
    toast.success("Logout");
  }
  return (
    <>
    <Toaster />
      <div className="header">
        <span href="#" className='logo'>Project Pioneer</span>
        <input type="checkbox" id='check' />
        <label htmlFor="check" className='icons'>
          <box-icon name='menu' id="menu-icon"></box-icon>
          <box-icon type='solid' name='x-circle' id="close-icon"></box-icon>
        </label>
        
        <div className='navbar'>
          <Link to="/">Home</Link>
          {
            !auth.user ? (<>

              <Link to="/login">Login</Link>
            </>) : (<>
              <Link to="/home">{auth.user.pname ? (auth.user.pname) : (auth.user.sname)}</Link>
              <Link onClick={handleLogout} to="/login">Logout</Link>

            </>)
          }
          {
            !auth.user ? (<>

              <Link to="/register">Register</Link>
            </>) : (<>
              
              <Link to={auth.user.sname ? "/student/dashboard" : "/faculty/dashboard"}>Dashboard</Link>

            </>)
          }

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>

  )
}
