import FriendItem from './FriendItem';

const Friend = ({ friend }) => {
  return (
    <li className="friends-item">
      <FriendItem friend={friend} />
    </li>
  );
};

export default Friend;
