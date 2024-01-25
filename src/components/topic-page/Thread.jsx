import React, { useEffect, useState } from "react";
import "./styles/Thread.css";
import Post from "./Post";
import NewPostForm from "./NewPostForm";
function Thread({ id, name, time, desc, img }, childer) {
  const [isThreadClicked, setThreadClick] = useState(false);
  const [postData, setPostData] = useState(null);
  const [buttonText, SetbuttonText] = useState("Click to open");
  const ThreadClick = (id) => {
    setThreadClick(!isThreadClicked);
    if (!isThreadClicked) SetbuttonText("Click to close");
    else SetbuttonText("Click to open");
  };
  useEffect(() => {
    if (isThreadClicked) {
      fetch(`http://localhost:3001/api/post/1`, { mode: "no-cors" })
        .then((response) => console.log(response))
        .then((response) => response.json())
        .then((response) => setPostData(response))
        .catch((error) => console.log(error));
    }
  }, [isThreadClicked]);

  return (
    <div className="cont">
      <hr />
      <div className="top-thread">
        <p className="anon">Anonymous</p>
        <p>#thread-id{id}</p>
        <p>{time}</p>
      </div>
      <div className="thread-body">
        <img src={img}></img>
        <p>{desc}</p>
      </div>
      <div className="bottom">
        <button
          onClick={() => {
            ThreadClick(id);
          }}
        >
          {buttonText}
        </button>
        {isThreadClicked && postData && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              alignItems: "center",
            }}
          >
            <NewPostForm className="add-post" threadId={id} />
            {postData &&
              postData.map((item) => (
                <Post
                  id={item.id}
                  time={item.time}
                  desc={item.desc}
                  img={"/img/" + item.img}
                  name={item.name}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Thread;
