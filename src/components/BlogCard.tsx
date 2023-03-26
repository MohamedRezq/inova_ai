import React, { FC } from "react";
import { HandThumbsUp, Chat } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const BlogCard = (props: any) => {
  //const cardBlog = useAppSelector((state) => state.mainBlog);
  return (
    <div className="blog-card-container">
      <Link to={`/blog?title=${props.cardBlog.title}`}>
        <div className="blog-card-img-container">
          <div className="blog-card-img-overlay">Read Article</div>
          <img
            src="/assets/bitcoin.png"
            alt={props.cardBlog.title}
            className="blog-card-img"
          />
        </div>
      </Link>
      {/*<div className="blog-card-tags">
        {props.Blog.tags.slice(0, 3).map((tag, i) => (
          <Badge bg="warning">{tag}</Badge>
        ))}
        </div>*/}
      <div className="blog-card-title">
        {props.cardBlog.title.length > 60
          ? `${props.cardBlog.title.slice(0, 60)}...`
          : props.cardBlog.title}
      </div>
      <div className="blog-card-publish">
        <div>
          <img
            src="assets/account.png"
            alt="author"
            className="blog-card-publish-author-img"
          />
          Mohamed Rezq
        </div>
        <Link to={`/blog?title=${props.cardBlog.title}`}><button className="blog-card-btn">Read Article</button></Link>
      </div>

      <div className="blog-card-footer">
        <div className="blog-card-reacts">
          <span>{props.cardBlog.likes}</span>
          <HandThumbsUp />
          <span>{props.cardBlog.comments.length}</span>
          <Chat />
        </div>
        <div className="blog-card-publish-date">
          {props.cardBlog.created_at}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
