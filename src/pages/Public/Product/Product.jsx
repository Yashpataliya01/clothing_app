import React from "react";
import "./Product.css";
import { quality, product_segments } from "../../../Data/Public";

const Product = () => {
  return (
    <div className="products">
      <div className="products_hero">
        <h1 className="hero_heading orange_color">Our Collections</h1>
        <p>
          Smart solutions for schools, corporates, hospitals & institutions.
        </p>
      </div>

      <div className="qualitys">
        {quality.map((item, index) => (
          <div className="quality" key={index}>
            <img src={item.icons} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="product_tagline">
        <p>"</p>
        <h1>
          Empowering Students with <span>Quality</span>, <span>Comfort</span>,
          and <span>Style</span> for Their Academic Journey
        </h1>
      </div>

      <div className="product_segments_hero">
        <h1>Product Segments</h1>
        <div className="product_segments">
          {product_segments.map((item, index) => (
            <div className="product_cards" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
