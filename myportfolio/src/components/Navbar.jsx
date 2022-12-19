import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
//import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
//import { logOut } from "../Redux/AuthReducer/action";

export const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  //const { tokenData, isAuth } = useSelector((state) => state.AuthReducer);
  //const dispatch = useDispatch();
  //const navigate = useNavigate();
  // const handleLog = () => {
  //   if (isAuth) {
  //     dispatch(logOut());
  //   } else {
  //     navigate("/signin", { replace: true });
  //   }
  // };

  return (
    <nav className="navbar">
<img src="https://cdn4.vectorstock.com/i/1000x1000/47/43/letter-p-black-flower-alphabet-beautiful-capital-vector-31724743.jpg" alt="" className="logo" />
      <ul
        className={Mobile ? "nav-link-mobile" : "nav-link"}
        onClick={() => setMobile(false)}
      >
        <a href="#home">
        <li>Home </li>
        </a>
        <a href="#more">
          <li>About</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
        <button onClick={()=>{window.open("https://drive.google.com/file/d/1XP4NfTRZCxFkT9fM2Fu5H7mtbcCzYUR_/view?usp=sharing","_blank")}}>
          <li>Resume</li>
        </button>

        <li>
          {/* <button className="login" onClick={handleLog}>
            {isAuth ? "SignOut" : "SignIn"}
          </button> */}
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};  