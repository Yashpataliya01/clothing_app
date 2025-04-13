import React from "react";
import "./Sidemenu.css"; // Import the CSS file for styling

const Sidemenu = () => {
  const recentBlogs = [
    {
      title: "3 Advantages of a Good Uniform Fabric",
      date: "2023-10-01",
      by: "Yash Pataliya",
    },
    {
      title: "3 Reasons How School Uniforms Help Save the Parents Pockets",
      date: "2023-12-11",
      by: "Yash Pataliya",
    },
    {
      title: "3 Ways to Upgrade and Differentiate Your School Uniforms between",
      date: "2023-10-01",
      by: "Yash Pataliya",
    },
  ];
  return (
    <div className="sidemenu">
      <div className="search_blog">
        <label className="gloock-regular">Search</label>
        <div className="input_search">
          <input type="search" />
          <i class="ri-search-eye-line" style={{ color: "#b5b5b5" }}></i>
        </div>
      </div>
      <div className="recent_post">
        <label className="gloock-regular"> Latest Blogs </label>
        <div className="recent_blogs">
          {recentBlogs.map((blog, index) => (
            <div className="recents">
              <h6>
                <span>➢</span> {blog.title}
              </h6>
              <p>
                {blog.date} / <span>{blog.by}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
