import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hi, I'm</h2>
            <h1>
              EMMAD
              <br />
              <span>AHMED</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Growth Catalyst</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Helping Brands Sell More</div>
              <div className="landing-h2-2">& add value</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
