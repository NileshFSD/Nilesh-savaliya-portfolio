import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar.js";
import MainPage from "./components/mainpage.js";
import Dom from "./components/dom.js";
import Contact from "./components/contact.js";
import Resume from "./components/resume.js";
import About from "./components/about.js";
import Project from "./components/project.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Resume />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
