import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default-img.jpg";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="150" />
      <p className="name">{name}</p>
    </div>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
