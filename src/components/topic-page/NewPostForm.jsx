import React from "react";
import style from "./styles/NewPost.module.css";
function NewPostForm({ threadId }) {
  return (
    <table>
      <tr>
        <td className={style.left}>Name:</td>
        <td className={style.right}>
          <b>Andrey</b>
        </td>
      </tr>
      <tr>
        <td className={style.left}>Comment:</td>
        <td className={style.right}>kjgbf,d</td>
      </tr>
      <tr>
        <td className={style.left}>Verification:</td>
        <td className={style.right}>
          <input type="checkbox" />
        </td>
      </tr>
    </table>
  );
}

export default NewPostForm;
