import React, { useEffect } from "react";
import "./Catalogs.css";
import useScrollAnimate from "../../../components/Animation/scrollAnimation.jsx";
import { featuredData, catalogsData } from "../../../Data/Public";
import pdfFile from "../../../assets/download.pdf"; // This is your sample PDF

const Catalogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollAnimate();

  // PDF download function
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "catalog.pdf"; // You can rename it here
    link.click();
  };

  return (
    <section className="catalogs-page">
      <div className="heross">
        <h1 className="hero_heading orange_color">Our Collections</h1>
        <p className="paragraph">
          Discover our exclusive range of stylish and quality clothing made just
          for you.
        </p>
      </div>

      {/* Main catalog grid */}
      <div className="catalogs-grid animate-on-scroll">
        {catalogsData.map((item) => (
          <div key={item.id} className="catalog-card">
            <div
              className="card-img"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            <div className="card-content">
              <h2 className="rajdhani-semibold">{item.title}</h2>
              <button className="view-button" onClick={downloadPdf}>
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="featured animate-on-scroll">
        <h1 className="rajdhani-bold">Featured</h1>
        <div className="featured-grid">
          {featuredData.map((item) => (
            <div key={item.id} className="featured-card">
              <div className="featured-img-wrapper">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <h3 className="rajdhani-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
