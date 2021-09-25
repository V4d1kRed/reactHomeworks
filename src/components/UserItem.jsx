import React from 'react';

const UserItem = ({user}) => {

  return (
    <div className="user" data-id={user.guid}>
      <img className="user__img" src={user.picture} alt=""/>
      <div className="user__content">
        <h3 className="user__name">{user.name}</h3>
        <p className="user__info">Age: <span>{user.age}</span></p>
        <p className="user__info">Gender: <span>{user.gender}</span></p>
        <p className="user__info">Balance: <span>{user.balance}</span></p>
      </div>
    </div>
  );
};

export default UserItem;
