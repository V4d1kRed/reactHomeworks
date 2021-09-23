import React, {useState} from 'react';
import './styles/App.css'
import {userData} from "./scripts/userData";
import UserList from "./components/UserList";
import AddNewUser from "./components/AddNewUser";

const App = () => {
  const [users, setUsers] = useState(userData);

  const createUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <AddNewUser create={createUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
