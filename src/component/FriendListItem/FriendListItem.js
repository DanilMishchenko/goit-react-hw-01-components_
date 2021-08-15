import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../default-img.jpg";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? styles.isOnline : styles.isOffline}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="50" />
      <p className={styles.name}>{name}</p>
    </>
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
