import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Apps from "./pages/Apps";
import GetStarted from "./pages/GetStarted";
import StartupSquare from "./docs/logoStartupSquare.png";
function App() {
  return (
    <BrowserRouter>
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
            <NavLink className="nav_op" to="pricing">
              Pricing
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apps" element={<Apps />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="getstarted" element={<GetStarted />} />
      </Routes>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
