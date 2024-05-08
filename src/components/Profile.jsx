import './profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="main-container">
      <div className="profile-start">
        <img className="profile-picture" src={avatar} alt="User avatar" />
        <p className="profile-user">{username}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>
      <ul className="profile-list">
        <li className="profile-item extra">
          <span className="profile-stats-name">Followers</span>
          <span className="profile-stats">{stats.followers}</span>
        </li>
        <li className="profile-item">
          <span className="profile-stats-name">Views</span>
          <span className="profile-stats">{stats.views}</span>
        </li>
        <li className="profile-item extra">
          <span className="profile-stats-name">Likes</span>
          <span className="profile-stats">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
