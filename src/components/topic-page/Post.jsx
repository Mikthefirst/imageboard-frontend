import React, { useState } from "react";

function Post({ id, name, time, desc, img }) {
  return (
    <div
      className="post-cont"
      style={{
        width: "100%",
        minHeight: "200px",
        maxHeight: "300px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "yellow",
        border: "1px solid green",
      }}
    >
      <div
        className="top"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "30px",
          border: "1px solid black",
          fontSize: "14px",
        }}
      >
        <p>{id}</p>
        <p>{name}</p>
        <p>{time}</p>
      </div>
      <div
        className="center"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          minHeight: "300px",
          boxSizing: "border-box",
          fontSize: "14px",
        }}
      >
        <p>{desc}</p>
        <img src={img}></img>
      </div>
    </div>
  );
}

export default Post;
