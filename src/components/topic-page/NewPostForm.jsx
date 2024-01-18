import React, { useState } from "react";
import style from "./styles/NewPost.module.css";

function NewPostForm({ threadId }) {
  const [isVisible, setIsVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSendPost = async () => {
    const response = await fetch("http://localhost:3001/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, comment }),
    });

    if (response.ok) {
      console.log("Post sent successfully");
    } else {
      console.log("Error sending post");
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isVisible ? "Скрыть" : "Показать"}
      </button>
      {isVisible && (
        <table>
          <tr>
            <td className={style.left}>Name:</td>
            <td className={style.right}>
              <input type="text" value={name} onChange={handleNameChange} />
            </td>
          </tr>
          <tr>
            <td className={style.left}>Comment:</td>
            <td className={style.right}>
              <textarea value={comment} onChange={handleCommentChange} />
            </td>
          </tr>
          <tr>
            <td className={style.left}>Verification:</td>
            <td className={style.right}>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={handleSendPost} type="submit">
                Send
              </button>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
}

export default NewPostForm;
