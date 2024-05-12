import Profile from './Profile';
import FriendList from './friends/FriendList';
import TransactionTable from './transactionhistory/TransactionHistory';
import userData from '../userData.json';
import friendsData from '../friends.json';
import transactionData from '../transaction.json';

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionTable transactions={transactionData} />
    </>
  );
};

export default App;
