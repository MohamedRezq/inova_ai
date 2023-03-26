import React from "react";
import { ArrowBarRight } from "react-bootstrap-icons";
import BlogCard from "../../components/BlogCard";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const recentBlogs = useAppSelector((state) => state.recentBlogs);
  return (
    <div className="recent-blogs-section">
      <div className="blog-cards-wrapper">
        {recentBlogs.map((blog, i) => (
          <BlogCard key={i} cardBlog={blog} />
        ))}
      </div>
      <div className="recent-blogs-sidebar">
        {recentBlogs.map((blog, i) => (
          <div key={i} className="recent-blogs-sidebar-blog">
            <div className="recent-blogs-sidebar-title">{blog.title}</div>
            <div className="recent-blogs-sidebar-description">
              {blog.writeup.length > 150
                ? `${blog.writeup.slice(0, 150)}...`
                : blog.writeup}
            </div>

            <div className="recent-blogs-sidebar-read">
              <Link to={`/blog?title=${blog.title}`}>
                Read Article <ArrowBarRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
