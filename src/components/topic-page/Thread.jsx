import React, { useEffect, useState } from "react";
import Post from "./Post";
import NewPostForm from "./NewPostForm";
function Thread({ id, name, time, desc, img }, childer) {
  const [isThreadClicked, setThreadClick] = useState(false);
  const [postData, setPostData] = useState(null);

  const ThreadClick = (id) => {
    setThreadClick(!isThreadClicked);
    console.log("clicked:", id);
  };
  useEffect(() => {
    if (isThreadClicked) {
      fetch(`http://localhost:3001/api/post/${id}`)
        .then((response) => response.json())
        .then((response) => setPostData(response))
        .then((response) => console.log(response));
    }
  });

  return (
    <div
      className="cont"
      style={{
        width: "100%",
        minHeight: "400px",
        maxHeight: "600px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "blue",
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

export default Thread;
/*
 <button
          onClick={() => {
            ThreadClick(id);
          }}
        >
          Click me to open Thread
        </button>
 {isThreadClicked && postData && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
          }}
        >
          <NewPostForm threadId={id} />
          {postData &&
            postData.map((item) => (
              <Post
                id={item.id}
                time={item.time}
                desc={item.desc}
                img={item.img}
                name={item.name}
              />
            ))}
        </div>
      )}
*/
