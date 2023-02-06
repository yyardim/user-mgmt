import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, age) => {
    setUsersList((prevUsersList) => {
      const updatedUsers = [...prevUsersList];
      updatedUsers.unshift({
        userName: userName,
        age: age,
        key: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  return (
    <Fragment>
      <div>
        <AddUser onAddUser={addUserHandler}></AddUser>
      </div>
      <div>
        <UsersList users={usersList} />
      </div>
    </Fragment>
  );
}

export default App;
