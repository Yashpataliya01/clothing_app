import React from "react";
import "./Product.css";
import "../../../styles/typography.css";
import "../../../styles/variable.css";

import { quality, product_segments } from "../../../Data/Public";

const Product = () => {
  return (
    <div className="products">
      <div className="products_hero">
        <h1 className="hero_heading orange_color">Our Collections</h1>
        <p className="paragraph">
          Smart solutions for schools, corporates, hospitals & institutions.
        </p>
      </div>

      <div className="qualitys">
        {quality.map((item, index) => (
          <div className="quality" key={index}>
            <img src={item.icons} alt={item.title} />
            <h3 className="rajdhani-bold">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="product_tagline">
        <p>"</p>
        <h1 className="rajdhani-semibold">
          Empowering Students with <span>Quality</span>, <span>Comfort</span>,
          and <span>Style</span> for Their Academic Journey
        </h1>
      </div>

      <div className="product_segments_hero">
        <h1 className="rajdhani-semibold">Product Segments</h1>
        <div className="product_segments">
          {product_segments.map((item, index) => (
            <div className="product_cards" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="product_image_slider">
        <div className="product_image_slider_container">
          <img
            src="https://images.unsplash.com/photo-1603207757545-de4fffdb404c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D"
            alt=""
          />
          <div className="product_image_slider_text">
            <h1 className="rajdhani-semibold orange_color">Heading</h1>
            <p className="paragraph">
              Soft, gentle fabrics that are kind to delicate skin of young
              generation. Our kindergarten fabrics are designed to be
              comfortable and durable, ensuring that young learners can focus on
              play and learning.
            </p>
          </div>
        </div>
        <div className="product_image_slider_container">
          <img
            src="https://images.unsplash.com/photo-1603207757545-de4fffdb404c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D"
            alt=""
          />
          <div className="product_image_slider_text">
            <h1 className="rajdhani-semibold orange_color">Heading</h1>
            <p className="paragraph">
              Soft, gentle fabrics that are kind to delicate skin of young
              generation. Our kindergarten fabrics are designed to be
              comfortable and durable, ensuring that young learners can focus on
              play and learning.
            </p>
          </div>
        </div>
        <div className="product_image_slider_container">
          <img
            src="https://images.unsplash.com/photo-1603207757545-de4fffdb404c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D"
            alt=""
          />
          <div className="product_image_slider_text">
            <h1 className="rajdhani-semibold orange_color">Heading</h1>
            <p className="paragraph">
              Soft, gentle fabrics that are kind to delicate skin of young
              generation. Our kindergarten fabrics are designed to be
              comfortable and durable, ensuring that young learners can focus on
              play and learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
