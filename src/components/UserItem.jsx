import React from 'react';

const UserItem = (props) => {

  return (
    <div className="user">
      <img className="user__img" src="http://placehold.it/32x32" alt=""/>
      <div className="user__content">
        <h3 className="user__name">{props.user.name}</h3>
        <p className="user__info">Age: <span>{props.user.age}</span></p>
        <p className="user__info">Gender: <span>{props.user.gender}</span></p>
        <p className="user__info">Balance: <span>{props.user.balance}</span></p>
      </div>
    </div>
  );
};

export default UserItem;
