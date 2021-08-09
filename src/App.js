import React from "react";
import Profile from "./component/Profile";
import user from "./user.json";
import Statistics from "./component/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./component/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./component/TransactionHistory";
import transactions from "./transactions.json";

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
