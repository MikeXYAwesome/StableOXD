import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/Pages/homepage";
import Mainpage from "./components/Pages/mainpage";
import ComError from "./components/Pages/ComError";
import OXDcomponets from "./components/Pages/oxdcomponets";
import OxdDropdown from "./components/Dropdown";
import OxdRadio from "./components/Pages/Radio/oxdradio";
import TextBox from "./components/Pages/Textbox";
import OxdButtons from "./components/Pages/Buttons";
import ComGrid from "./components/Pages/comgrid";
import OXdlogos from "./assets/img/oxdlogo.png";
import "./components/Pages/css/componetspage.css";
import "./App.css";
import ComLogo from "./components/SvgImages/comlogo";

function App() {
  return (
    <Router>
      <div className="topNaveBar">
        <div className="logobox">
          <img src={OXdlogos} />
        </div>
        <div className="navwrap">
          <nav>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#000",
                background: isActive ? "#000" : "#fff",
              })}
            >
              Explore
            </NavLink>
            <NavLink
              to="/mainpage"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#000",
                background: isActive ? "#000" : "#fff",
              })}
            >
              Mainpage
            </NavLink>
            <NavLink
              to="/oxdcomponets"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#000",
                background: isActive ? "#000" : "#fff",
              })}
            >
              Components
            </NavLink>
          </nav>
        </div>
        <div className="toplinkwrap">
          <div className="comlogo">
            <ComLogo />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/oxdcomponets" element={<OXDcomponets />}>
          <Route path="/oxdcomponets" element={<ComGrid />} />
          <Route path="radio" element={<OxdRadio />} />
          <Route path="textbox" element={<TextBox />} />
          <Route path="dropdown" element={<OxdDropdown />} />
          <Route path="mainpage" element={<Mainpage />} />
          <Route path="buttons" element={<OxdButtons />} />
          <Route path="*" element={<ComError />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
