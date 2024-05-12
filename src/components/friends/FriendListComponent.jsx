const Friend = ({ friend }) => {
  return (
    <li className="friends-item">
      <img className="friend-picture" src={friend.avatar} alt={friend.name} />
      <p classsName="friend-name">{friend.name}</p>
      <p className="friend-status">{friend.isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
};
export default Friend;
