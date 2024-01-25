import React, { useState } from "react";
import "./styles/NewPostForm.css";

function NewThread() {
  const [isVisible, setIsVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [file, SetFile] = useState(null);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };
  const onChangeFile = (event) => {
    SetFile(event.target.files[0]);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSendPost = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("comment", comment);
    handleButtonClick();
    const response = await fetch("http://localhost:3001/api/add-thread", {
      method: "POST",
      body: formData,
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
          <tbody>
            <tr data-type="Name">
              <td>Name</td>
              <td>
                <input
                  name="name"
                  type="text"
                  tabindex="1"
                  placeholder="Anonymous"
                  onChange={handleNameChange}
                />
              </td>
            </tr>
            <tr data-type="Comment">
              <td>Comment</td>
              <td>
                <textarea
                  name="com"
                  cols="48"
                  rows="4"
                  wrap="soft"
                  tabindex="4"
                  onChange={handleCommentChange}
                ></textarea>
              </td>
            </tr>
            <tr id="captchaFormPart">
              <td class="desktop">Verification</td>
              <td colspan="2">
                <div
                  id="t-root"
                  style={{ position: "relative", width: "300px" }}
                >
                  <button
                    id="t-load"
                    type="button"
                    data-board="g"
                    data-tid="0"
                    style={{
                      fontSize: "11px",
                      padding: "0px",
                      width: "90px",
                      boxSizing: "border-box",
                      margin: "0px 6px 0px 0px",
                      verticalAlign: "middle",
                      height: "18px",
                    }}
                  >
                    Get Captcha
                  </button>
                  <input
                    id="t-resp"
                    name="t-response"
                    placeholder="Type the CAPTCHA here"
                    autocomplete="off"
                    type="text"
                    style={{
                      width: "160px",
                      boxSizing: "border-box",
                      textTransform: "uppercase",
                      fontSize: "11px",
                      height: "18px",
                      margin: "0px",
                      padding: "0px 2px",
                      fontFamily: "monospace",
                      verticalAlign: "middle",
                    }}
                  />
                  <button
                    id="t-help"
                    type="button"
                    data-tip="Help"
                    tabindex="-1"
                    style={{
                      fontSize: "11px",
                      padding: "0px",
                      width: "20px",
                      boxSizing: "border-box",
                      margin: "0px 0px 0px 6px",
                      verticalAlign: "middle",
                      height: "18px",
                    }}
                  >
                    ?
                  </button>
                  <div
                    id="t-cnt"
                    style={{
                      height: "80px",
                      marginTop: "2px",
                      position: "relative",
                    }}
                  >
                    <div
                      id="t-bg"
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left top",
                      }}
                    ></div>
                    <div
                      id="t-fg"
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left top",
                      }}
                    ></div>
                  </div>
                  <input
                    id="t-slider"
                    autocomplete="off"
                    type="range"
                    min="0"
                    max="100"
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      visibility: "hidden",
                      margin: "0px",
                      transition: "box-shadow 10s ease-out 0s",
                      boxShadow: "rgb(29, 141, 196) 0px 0px 4px 2px",
                      position: "relative",
                    }}
                  />
                  <div
                    id="t-msg"
                    style={{
                      width: "100%",
                      position: "absolute",
                      top: "50%",
                      textAlign: "center",
                      fontSize: "14px",
                      filter: "inherit",
                      display: "none",
                    }}
                  ></div>
                  <input name="t-challenge" type="hidden" />
                </div>
              </td>
            </tr>
            <tr data-type="File">
              <td>File</td>
              <td>
                <input
                  id="postFile"
                  name="upfile"
                  type="file"
                  tabindex="7"
                  onChange={onChangeFile}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="Send" onClick={handleSendPost} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default NewThread;
