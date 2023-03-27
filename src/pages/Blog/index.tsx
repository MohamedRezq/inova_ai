import React, { useRef } from "react";
import { ArrowBarRight } from "react-bootstrap-icons";
import blogs from "../../db/blog.json";
import { useAppSelector } from "../../redux/hooks";
import { Container } from "react-bootstrap";
import BlogContent from "../../components/BlogContent";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {;
  let [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  const recentBlogs = useAppSelector((state) => state.recentBlogs);
  const showBlog = blogs.filter((blog) => blog.title === title);
  return (
    <Container className="blog-page">
      <div className="blog-content-wrapper">
        <div className="blog-title">{showBlog[0].title}</div>
        <BlogContent blog={showBlog[0]} />
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
    </Container>
  );
};

export default Blog;
