import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Mainnavbar from "./Mainnavbar";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ added useLocation

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ added

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData && userData !== "undefined") {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.log("Invalid user in localStorage", err);
        localStorage.removeItem("user");
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [location]); // ✅ runs after login redirect also

  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <div className="showbtn" onClick={() => setShowMenu(!showMenu)}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/menu-bar-icon-svg-download-png-8389626.png?f=webp&w=128"
                width="50px"
              />
            </div>
          </li>

          <li className="sitename">SPARK NIGHT </li>

          <li>
            <img
              src="https://image-static.collegedunia.com/public/image/09-18:26-Thumbnail_%201%20College%20and%20Exam%20-%202024-11-09T182018.967.jpeg"
              className="logomgcub"
              alt=""
            />
          </li>

          <li>
            {user ? (
              <div className="userlogin" onClick={() => navigate("/login")}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MhcHdtk7pSGG903TzzIeZkOVjnL5iJjdlQ&s" alt="img" width="30px" />
                <span>sucsess</span>
              </div>
            ) : (
              <button
                className="loginbtn"
                onClick={() => navigate("/login", { replace: true })}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>

      <Mainnavbar isVisible={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Navbar;
