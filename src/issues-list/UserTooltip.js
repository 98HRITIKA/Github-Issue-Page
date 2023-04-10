import React from "react";
import "./UserTooltip.scss";

function UserTooltip(props) {
  return (
    <div className="user-tooltip">
      <img src={props.user.avatar_url} alt={props.user.login} />
      <span>{props.user.login}</span>
    </div>
  );
}

export default UserTooltip;
