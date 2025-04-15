import React, { useEffect, useState } from "react";
import Sidemenu from "./components/Sidemenu";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
// data
import { blogs } from "../../../Data/Public";
import useScrollAnimate from "../../../components/Animation/scrollAnimation.jsx";

const Blogs = () => {
  const [filterBlogs, setFilterBlogs] = useState(blogs);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFUllArtical = (id) => {
    navigate(`/blogs/${id}`);
  };

  if (!filterBlogs) return <p className="no-blog">Blog not found</p>;

  useScrollAnimate();
  return (
    <div className="blogs" style={{ marginTop: "120px" }}>
      <div className="blogs__container">
        <div className="blogs_content">
          <div className="blogs_content__header">
            <h2 className="gloock-regular">Latest Articles</h2>
            <p>We bring industry insights and stories from professionals</p>
          </div>
          <div className="blogs_content__body__grid">
            {filterBlogs.map((blog, index) => (
              <div
                key={index}
                className="blog_card"
                onClick={() => getFUllArtical(blog.id)}
              >
                <img src={blog.img} alt="Blog" />
                <div className="card_text">
                  <h3 className="rajdhani-semibold">{blog.title}</h3>
                  <p className="paragraph">
                    {blog.description.length > 100
                      ? blog.description.slice(0, 100) + "..."
                      : blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blogs_sidebar">
          <Sidemenu setFilterBlogs={setFilterBlogs} blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
