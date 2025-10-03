import styles from "../styles/ProfileImg.module.css";
import profilePic from "../assets/profileImg.jpg";

const ProfileImg = () => {
  return (
    <div className={styles.profileContainer}>
      <img src={profilePic} alt="Profile" className={styles.profileImg} />
    </div>
  );
};

export default ProfileImg;
