import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/Logo.jpg';
import { UserContext } from '../App';


const Nav = () => {
  const { state, dispatch } = useContext(UserContext);

  const NavMenu = () => {
    if (state) {
      return (
        <>

          <li className="nav-item ">
            <NavLink activeClassName="menu_active" className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/work">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/logout">LogOut</NavLink>
          </li>

        </>
      )
    } else {
      return (
        <>
          <li className="nav-item ">
            <NavLink activeClassName="menu_active" className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/work">Portfolio</NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/signin">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/signup">Register</NavLink>
          </li>
        </>
      )
    }

  }
  return (
    <>
      <div className="text-center container-fluid nav_bg bg-primary">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                <img src={logo} width="150" height="90" alt="logo" /></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="mb-2 ml- navbar-nav mb-lg-0">

                  <NavMenu />

                </ul>
              </div>
            </div>
          </nav>

        </div>
      </div>



    </>
  )
}

export default Nav;
