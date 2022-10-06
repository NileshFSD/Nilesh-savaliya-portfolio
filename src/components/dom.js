import MainPage from "./mainpage.js";
import NavBar from "./navbar.js";
import Contact from "./contact.js";

const openBtn = document.querySelector("navbar-content");

const Dom = () => {
  return (
    <>
      {function change() {
        openBtn.removeAttribute("id");
        console.log("clicked");
      }}
    </>
  );
};

export default Dom;
