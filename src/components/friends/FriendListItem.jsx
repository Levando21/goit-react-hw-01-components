const FriendItem = ({ friend }) => {
  return (
    <div>
      <img className="friend-picture" src={friend.avatar} alt={friend.name} />
      <p className="friend-name">{friend.name}</p>
      <p className="friend-status">{friend.isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendItem;
