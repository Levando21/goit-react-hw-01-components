import Profile from './Profile';
import userData from '../userData.json';

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
    </>
  );
};

export default App;
