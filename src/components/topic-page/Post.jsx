import React, { useState } from "react";
import "./styles/Post.css";
function Post({ id, name, time, desc, img }) {
  return (
    <div className="post">
      <div className="top-post">
        <p>{id}</p>
        <p>{name}</p>
        <p>{time}</p>
      </div>
      <div className="post-body">
        <img src={img} alt="" />
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Post;
