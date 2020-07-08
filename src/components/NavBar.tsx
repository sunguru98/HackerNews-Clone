import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar: React.FC = () => {
  return (
    <nav className="NavBar">
      <Link to="/" className="NavBar__logo">
        <img
          alt="hacker-logo"
          className="NavBar__logo-img"
          src="https://news.ycombinator.com/y18.gif"
        />
        <h5 className="NavBar__logo-text">Astradot News</h5>
      </Link>
      <div className="NavBar__links">
        <Link to="/newest">new</Link> | <Link to="/front">past</Link> |{" "}
        <Link to="/newcomments">comments</Link> | <Link to="/ask">ask</Link> |{" "}
        <Link to="/show">show</Link> | <Link to="/jobs">jobs</Link> |{" "}
        <Link to="/submit">submit</Link>{" "}
      </div>
      <span className="NavBar__auth">
        <Link to="/login">login</Link>
      </span>
    </nav>
  );
};

export default NavBar;
