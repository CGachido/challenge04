import React from "react";

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} alt="Avatar" className="avatar" />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments() {
  return <h1>coments</h1>;
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments />
    </div>
  );
}

export default PostItem;
