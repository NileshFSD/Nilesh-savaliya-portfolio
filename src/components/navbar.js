import Contact from "./contact.js";
import contact from "./contact.js";

const NavBar = () => {
  return (
    <div className="navbarComponent">
      <div className="navbar-content">
        <div className="home">
          {" "}
          <a href="#homePage">Home</a>
        </div>
        <div className="about">
          <a href="#aboutPage">About</a>{" "}
        </div>
        <div className="resume">
          <a href="#resumePage">Resume</a>
        </div>
        <div className="project">
          {" "}
          <a href="#projectPage">Projects</a>{" "}
        </div>
        <div className="contact">
          <a href="#contactsPage">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
