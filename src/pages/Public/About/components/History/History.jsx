import { useEffect } from "react";
import "./History.css";

const History = () => {
  const data = [
    {
      year: "1981",
      heading: "The Foundation of Valji Fabrics",
      info: "The Valji Group - initially focused on manufacturing plain shirting fabrics , laying the groundwork for establishing their foundation in the textile industry.",
      img: "https://valji.in/wp-content/uploads/2024/09/Valji-blog4.webp",
    },
    {
      year: "1981",
      heading: "The Foundation of Valji Fabrics",
      info: "The Valji Group - initially focused on manufacturing plain shirting fabrics , laying the groundwork for establishing their foundation in the textile industry.",
      img: "https://valji.in/wp-content/uploads/2024/09/Valji-blog4.webp",
    },
    {
      year: "1981",
      heading: "The Foundation of Valji Fabrics",
      info: "The Valji Group - initially focused on manufacturing plain shirting fabrics , laying the groundwork for establishing their foundation in the textile industry.",
      img: "https://valji.in/wp-content/uploads/2024/09/Valji-blog4.webp",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="info">
        <div className="details">
          <div className="models">
            {data.map((item, index) => (
              <>
                <div className={`model1 ${index % 2 !== 0 ? "reverse" : ""}`}>
                  <img src={item.img} alt="" />
                  <div className="model_info">
                    <h2>{item.year}</h2>
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
