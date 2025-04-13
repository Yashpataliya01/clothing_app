import React, { useEffect } from "react";
import Sidemenu from "./components/Sidemenu";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
// data
import { blogs } from "../../../Data/Public";

const Blogs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFUllArtical = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="blogs">
      <div className="blogs_header">
        <h1 className="hero_heading orange_color">Blogs</h1>
        <p className="paragraph">Explore our latest blogs</p>
      </div>

      <p className="text_center margin_top_8 breadcrumb">
        HOME / <span className="color_gray">BLOGS</span>
      </p>

      <div className="blogs__container">
        <div className="blogs_content">
          <div className="blogs_content__header">
            <h2 className="gloock-regular">Latest Articles</h2>
            <p>We bring industry insights and stories from professionals</p>
          </div>
          <div className="blogs_content__body__grid">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="blog_card"
                onClick={() => getFUllArtical(blog.id)}
              >
                <img src={blog.img} alt="Blog" />
                <div className="card_text">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blogs_sidebar">
          <Sidemenu />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
