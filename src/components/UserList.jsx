import React from 'react';
import UserItem from "./UserItem";

const UserList = ({users, onClick}) => {
  if (!users.length) {
    return (
      <div className="notice">
        <div className="container">
          <div className="notice__body">
            <h3 style={{textAlign: 'center', color: 'grey'}}>User list is empty</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="users" onClick={onClick}>
      <div className="container">
        <div className="users__body">
          {users.map(user => <UserItem user={user} id={user.guid} key={user.guid}/>)}
        </div>
      </div>
    </div>
  );
};

export default UserList;
