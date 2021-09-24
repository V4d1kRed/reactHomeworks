import React, {useMemo, useState} from 'react';
import './styles/App.css';
import {userData} from "./scripts/userData";
import Header from "./components/Header";
import UserList from "./components/UserList";
import AddNewUser from "./components/AddNewUser";
import ModalWindow from "./components/ModalWindow";

const App = () => {
  const [users, setUsers] = useState(userData);

  const [filter, setFilter] = useState({
    name: '',
    age: ''
  });

  const createUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const searchUserByName = useMemo(() => {
    if (users.length) {
      return users.filter(user => user.name.toLowerCase().includes(filter.name.toLowerCase()));
    }
    return users;
  }, [filter.name, users]);

  const searchUserByNameAndSortedByAge = useMemo(() => {
    if (filter.age === 'Descending') {
      return [...searchUserByName].sort((a, b) => a.age - b.age);
    }
    if (filter.age === 'Ascending') {
      return [...searchUserByName].sort((a, b) => b.age - a.age);
    }
    return searchUserByName;
  }, [filter.age, searchUserByName]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header filter={filter} setFilter={setFilter}/>
        <AddNewUser create={createUser}/>
        <UserList users={searchUserByNameAndSortedByAge}/>
        <ModalWindow/>
      </div>
    </div>
  );
}

export default App;
