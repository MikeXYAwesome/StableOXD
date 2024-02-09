import "./css/componetspage.css";
import "./css/comgrid.css";
import OxdCard from "./Card";
import { SidebarData } from "./sidebarData";
//import img1 from "../../assets/img/cardplaceholder.png";

function ComGrid() {
  return (
    <>
      <div className="gridwrap">
        <div className="gridTitle">
          <div></div>
        </div>

        <div className="cardGrid">
          {/* {SidebarData.map((val, key) => {
            return <h1 key={key}>{val.title}</h1>;
          })} */}
          {SidebarData.map((val, key) => {
            return (
              <OxdCard
                head={val.title}
                imagepath={val.imagepath}
                discrip={val.link}
                key={key}
              ></OxdCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ComGrid;
