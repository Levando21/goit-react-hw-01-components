import './friend-list.css';
import Friend from './FriendListComponent';
const FriendList = ({ friends }) => {
  return (
    <div className="friends-container">
      <ul className="friends-list">
        {friends.map((friend, index) => (
          <Friend key={index} friend={friend} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
