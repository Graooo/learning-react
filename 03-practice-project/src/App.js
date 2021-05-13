import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersData, setUsersData] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersData((prev) => {
      return [...prev, { name, age, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
