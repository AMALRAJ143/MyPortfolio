import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Nav from "./nav/nav";
import Home from "./home/home";
import About from "./about/about";
import Education from "./education/education";
import Projects from "./project/project"

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Projects></Projects>
    </div>
  );
}

export default App;
