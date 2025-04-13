import React from "react";
import "./ChooseUs.css";
import "../../styles/global.css";

import { why_choose } from "../../Data/Public";

const ChooseUs = () => {
  return (
    <div className="main_why animate-on-scroll bg_white">
      <h1 className="rajdhani-semibold">Why Customers Choose Us</h1>
      <div className="why_container">
        {why_choose.map((item, i) => (
          <div className="clild" key={i}>
            <img src={item.icon} alt="" />
            <h1 className="rajdhani-bold">{item.title}</h1>
            <p className="paragraph">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
