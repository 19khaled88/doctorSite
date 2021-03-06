import { signOut } from '@firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import auth from '../../components/Auth/firebase.init'
const Navbar = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const navbarItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/services">Create Services</Link>
      </li>
      <li tabindex="0">
        <a className="justify-between">
          Parent
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contact-us">ContactUs</Link>
      </li>

      <li>
        <Link to="/slot">Create Slot</Link>
      </li>
      <ToastContainer />
    </>
  )
  const hasUser = (
    <>
      <li>
        <button onClick={() => logoutHandler()}>Logout</button>
      </li>
    </>
  )
  const hasNotUser = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  )
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate('/register')
      })
      .catch((error) => {})
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItem} {user ? hasUser : hasNotUser}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navbarItem} {user ? hasUser : hasNotUser}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
