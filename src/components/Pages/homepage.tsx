import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./css/stylehomepage.css";
import SplineScene from "../Splinetest";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="homeContainer">
        <div className="flexCard1">
          <div>OXD Design System</div>
          <Link to="/mainpage" className="mainPagelinks">
            See the Majic
          </Link>
        </div>
        <div className="flexCard2" data-aos="fade-right">
          <div>Design Philosophy</div>
          <Link to="/mainpage" className="mainPagelinks">
            Learn What's Behind
          </Link>
        </div>
        <div className="flexCard3" data-aos="fade-left">
          <div>OXD Interaction Module</div>
          <Link to="/mainpage" className="mainPagelinks">
            See The Guide
          </Link>
          <div className="splineBg">
            <SplineScene></SplineScene>
          </div>
        </div>
        <div className="flexCard4" data-aos="fade-right">
          <div>Figma UI Library</div>
          <Link to="/mainpage" className="mainPagelinks">
            Go to File
          </Link>
        </div>
        <div className="flexCard4" data-aos="zoom-in">
          <div>User Experience Standards</div>
          <Link to="/mainpage" className="mainPagelinks">
            MainPage
          </Link>
        </div>
        <div className="flexCard3" data-aos="fade-left">
          <div>Made By OXD</div>
          <Link to="/mainpage" className="mainPagelinks">
            MainPage
          </Link>
        </div>
        <div className="flexCard5" data-aos="fade-right">
          <div>UI Components</div>
          <Link to="/oxdcomponets" className="mainPagelinks">
            MainPage
          </Link>
        </div>
        <div className="flexCard6" data-aos="zoom-out">
          <div>OXD Iconography</div>
          <Link to="/mainpage" className="mainPagelinks">
            MainPage
          </Link>
        </div>
        <div className="flexCard3" data-aos="fade-up-right">
          <div>QA Guide</div>
          <Link to="/mainpage" className="mainPagelinks">
            MainPage
          </Link>
        </div>
        <div className="flexCard7" data-aos="fade-up-left">
          <div>OXD Widgets</div>
          <Link to="/mainpage" className="mainPagelinks">
            MainPage
          </Link>
        </div>

        <div className="OtherLinkCard" data-aos="fade-right">
          <div className="Olinks">OXD Exam</div>
          <div className="Olinks">OXD Certifications</div>
          <div className="Olinks">OXD Blogs</div>
        </div>
      </div>
      <div className="homepagewrap" data-aos="flip-down">
        <div className="main-footer"></div>
      </div>
    </>
  );
}

export default HomePage;
