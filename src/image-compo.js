import React from "react";

export function Image(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

export function UserComponent(props) {
  return (
    <div className="UserInfo">
      <Image user={props.user} />
      <div className="UserInfo-name">
        <p>{props.user.name}</p>
      </div>
    </div>
  );
}
