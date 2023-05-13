import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import Pricing from "./pages/Pricing.js";
import Apps from "./pages/Apps.js";
import GetStarted from "./pages/GetStarted";
import StartupSquare from "./docs/logoStartupSquare.png";
import Footer from "./pages/Footer.js";
import dataFooter from "./pages/contentFooter";

function App() {
  return (
    <BrowserRouter>
    <div className="contenaire">
      <nav className="navbar navbar-expand-lg ">
        <img className="brand" src={StartupSquare} alt="brand" />
        <ul className="ulApp ">
          <li>
            <NavLink className="nav_op" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_op" to="apps">
              Apps
            </NavLink>
          </li>
          
          <li>
            <NavLink className="nav_op" to="About">
              About
            </NavLink>
          </li>
        </ul>
        <NavLink className="login" to="login">
          Login
        </NavLink>
        <NavLink to="getstarted">
          <button className="getStartedBtnNav">Get Started</button>
        </NavLink>
      </nav>
      </div>

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apps" element={<Apps />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="getstarted" element={<GetStarted />} />
      </Routes>
      <footer>
       <Footer/>
      </footer>
    </BrowserRouter>
    
  );
}

export default App;
