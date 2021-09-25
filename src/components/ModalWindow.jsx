import React, {Fragment} from 'react';

const ModalWindow = ({visible, setVisible, user}) => {
  const getClass = visible ? 'modal modal--active' : 'modal';

  const hideUserInformation = (event) => {
    if (event.target.classList.value !== 'modal__content') {
      document.body.classList.remove('lock');
      setVisible(false);
    }
  };

  if (!user) {
    return (
      <Fragment/>
    );
  }

  return (
    <div className={getClass} onClick={hideUserInformation}>
      <div className="container">
        <div className="modal__body">
          <div className="modal__content">
            <img className="modal__image" src={user.picture} alt=""/>
            <h3 className="modal__title">{user.name}</h3>
            <p className="modal__info">Age: <span>{user.age}</span></p>
            <p className="modal__info">Gender: <span>{user.gender}</span></p>
            <p className="modal__info">Balance: <span>{user.balance}</span></p>
            <button className="modal__close"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
