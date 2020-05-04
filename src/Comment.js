import React from "react";
import { UserComponent } from "./image-compo.js";

// {
/* <img
className="Avatar"
src={props.author.avatarUrl}
alt={props.author.name}
/> */
// }

// {
/* <div className="UserInfo">
<Image user={props.author} />
<div className="UserInfo-name">
  <p>{props.author.name}</p>
</div>
</div> */
// }

export function Comment(props) {
  return (
    <div className="Comment">
      <UserComponent user={props.author} />
      <div className="Comment-text">
        <p>{props.text}</p>
      </div>

      <div className="Comment-date">
        <p>{props.date}</p>
      </div>
    </div>
  );
}

// date={comment.date} text={comment.text} author={comment.author}
