import React, { useEffect } from "react";
import "./Catalogs.css";

// Import data from your data file.
import { featuredData, catalogsData } from "../../../Data/Public";

const Catalogs = () => {
  // Optional: scroll to the top when the component loads.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="catalogs-page">
      <div className="heross">
        <h1 className="hero_heading orange_color">Our Collections</h1>
        <p>
          Discover our exclusive range of stylish and quality clothing made just
          for you.
        </p>
      </div>

      {/* Main catalog grid */}
      <div className="catalogs-grid">
        {catalogsData.map((item) => (
          <div key={item.id} className="catalog-card">
            <div
              className="card-img"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            <div className="card-content">
              <h2>{item.title}</h2>
              <button className="view-button">Explore</button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="featured">
        <h1>Featured</h1>
        <div className="featured-grid">
          {featuredData.map((item) => (
            <div key={item.id} className="featured-card">
              <div className="featured-img-wrapper">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
