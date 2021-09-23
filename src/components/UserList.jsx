import React from 'react';
import UserItem from "./UserItem";

const UserList = (props) => {

  return (
    <div className="users">
      <div className="container">
        <div className="users__body">
          {props.users.map(user => <UserItem user={user} key={user._id}/>)}
        </div>
      </div>
    </div>
  );
};

export default UserList;
