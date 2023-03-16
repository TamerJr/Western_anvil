import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import userContext from "../../Context/AuthContext";
import "./Navbar.css";
const Navbar = () => {
  const navigator = useNavigate();
  const handleNav = (ele) => {
    navigator(`/${ele}`);
  };
  const { logOut, user } = useContext(userContext);

  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" title="Logo" />
      </Link>
      <section className="NavigationBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>
      </section>
      <section className="AuthUser">
        {!user ? (
          <>
            <button onClick={() => handleNav("login")}>Log In</button>
            <button onClick={() => handleNav("signup")}>Sign Up</button>
          </>
        ) : (
          <button onClick={() => logOut()}> Log Out </button>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
