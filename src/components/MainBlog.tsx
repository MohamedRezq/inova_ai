import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const MainBlog = () => {
  const mainBlog = useAppSelector((state) => state.mainBlog);

  // Render
  return (
    <div className="main-blog-wrap">
      <img src="/assets/bitcoin.png" className="main-blog-img-bg" />
      <div className="main-blog-bg-gradient"></div>
      <div className="main-blog">
        <div className="title">{mainBlog.title}</div>
        <div className="description">{mainBlog.writeup.slice(0, 100)}...</div>
        <Link to={`/blog?title=${mainBlog.title}`}>
          <Button>Read Article</Button>
        </Link>
      </div>
    </div>
  );
};

export default MainBlog;
