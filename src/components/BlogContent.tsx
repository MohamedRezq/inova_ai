import React from "react";
import { BlogType } from "../types";

const BlogContent = (props: { blog: BlogType }) => {
  return (
    <div className="blog-content">
      <div className="blog-content-body">{props.blog.writeup}</div>
      <div className="blog-content-comments">
        <>
          <div className="comments-title">Comments</div>
          <hr />
          {props.blog.comments.map((comment, i) => (
            <div key={i} className="blog-content-comment">
              <div className="comment-author">
                <img
                  src={require(`./../db/storage/users/${comment.user_id}/${comment.user_image}`)}
                  alt={comment.user_name}
                  className="blog-content-comment-userimage"
                />
                <div className="blog-content-comment-username">
                  {comment.user_name}
                </div>
              </div>
              <div className="blog-content-comment-body">{comment.view}</div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default BlogContent;
