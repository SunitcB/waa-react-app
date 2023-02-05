import React from "react";
import { Link } from "react-router-dom";
// import logo from '../../assets/logos/miu-logo.png';
import "./NavHeader.css";

const NavHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/createPost">Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;