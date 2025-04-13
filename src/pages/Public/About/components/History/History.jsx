import { useEffect } from "react";
import "./History.css";

// import data
import { Historydata } from "../../../../../Data/Public.jsx";

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="info">
        <div className="details">
          <div className="models">
            {Historydata.map((item, index) => (
              <>
                <div className={`model1 ${index % 2 !== 0 ? "reverse" : ""}`}>
                  <img src={item.img} alt="" />
                  <div className="model_info">
                    <h2 className="rajdhani-medium theme_color_blu">
                      {item.year}
                    </h2>
                    <h1>{item.heading}</h1>
                    <p>{item.info}</p>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
