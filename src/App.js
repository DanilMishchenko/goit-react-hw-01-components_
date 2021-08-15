import React from "react";
import Profile from "./component/Profile/Profile";
import user from "./component/Profile/user.json";
import Statistics from "./component/Statistics/Statistics";
import statisticalData from "./component/Statistics/statistical-data.json";
import FriendList from "./component/FriendList/FriendList";
import friends from "./component/FriendList/friends.json";
import TransactionHistory from "./component/TransactionHistory/TransactionHistory";
import transactions from "./component/TransactionHistory/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
