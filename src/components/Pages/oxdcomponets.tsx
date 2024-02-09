import { Outlet } from "react-router-dom";
import "./css/componetspage.css";
import Sidebar from "./sidebar";

function OXDcomponets() {
  return (
    <>
      <div className="pageWrpper">
        <div className="comMainWraper">
          <Sidebar />
          <div className="componetsPage">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default OXDcomponets;

//let items = ["Buttons", "DropDown", "Radio", "Check Box", "mainpage"];
