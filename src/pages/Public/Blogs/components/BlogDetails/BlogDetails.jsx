import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import { blogs } from "../../../../../Data/Public";
import Sidemenu from "../Sidemenu";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) return <p className="no-blog">Blog not found</p>;

  return (
    <div className="blog_details_container">
      <div className="blog_image">
        <img src={blog.img} alt={blog.title} />
        <div className="hero_title">
          <h1 className="rajdhani-bold">{blog.title}</h1>
        </div>
      </div>

      <div className="blog_details_main">
        <div className="blog_content">
          <h1 className="rajdhani-bold">{blog.title}</h1>
          <p className="blog_date">{blog.date}</p>
          <p className="blog_description paragraph">
            {blog.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>

      <aside className="blog_sidemenu">
        <Sidemenu />
      </aside>
    </div>
  );
};

export default BlogDetails;
