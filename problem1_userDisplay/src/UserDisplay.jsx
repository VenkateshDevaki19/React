import React, { useState } from "react";
import styles from './UserDisplay.module.css';

const UserDisplay = ({ user }) => {
  const {
    avatar,first_name,
    last_name,address,
    karma,followers,
    posts,isFollowing,toggleFollow,} = user;

    const [following, setFollowing] = useState(isFollowing);

    const handleFollowToggle = () =>{
        setFollowing(!following);
    }
  return (
    <div className={styles.UserDisplay}>
      <img
        src={avatar}
        alt={`${first_name} ${last_name}`}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <h2>{`${first_name} ${last_name}`}</h2>
        <p>{address}</p>
      </div>

      <div className={styles.stats}>
        <span>
          <strong>Karma:{karma}</strong>
        </span>
        <span>
          <strong>Followers:{followers}</strong>
        </span>
        <span>
          <strong>Posts:{posts}</strong>
        </span>
      </div>

      <button 
        className={`${styles.followButton} ${following ? styles.unfollow : styles.follow}`} 
        onClick={handleFollowToggle}>
        {following ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default UserDisplay;
