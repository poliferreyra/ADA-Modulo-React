import LogoReact from "../../assets/react.svg";

import "./Logo.css";

export const Logo = ({withTitle}) => {
  if (withTitle) {
    return (
      <div className="logo">
        <img src={LogoReact} alt="logo de React" />
        <h1 className="title">ADA Props</h1>
      </div>
    );
  }
  return (
    <div className="logo">
      <img src={LogoReact} alt="logo de React" />
      {/* <h1 className="title">ADA Props</h1> */}
    </div>
  );
};
