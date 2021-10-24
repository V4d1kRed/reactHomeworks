import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeModalAction} from "../../actions/modalActions";
import {resetStopwatchAction} from "../../actions/stopwatchActions";
import CurrentParticipant from "../participants/currentParticipant/CurrentParticipant";

const Modal = () => {
  const dispatch = useDispatch();
  const stateModalStopwatch = useSelector(state => state.modal.stateModalStopwatch);
  const intervalId = useSelector(state => state.stopwatch.intervalId);

  const initialState = {
    start: true,
    stop: false,
    reset: false,
    cancel: true,
    save: false
  };

  const [stateButtons, setStateButtons] = useState(initialState);

  const closeModal = () => {
    setStateButtons(initialState);
    clearInterval(intervalId);
    dispatch(closeModalAction());
    dispatch(resetStopwatchAction());
  };

  return (
    <div className={stateModalStopwatch ? "modal modal--active" : "modal"} onClick={closeModal}>
      <div className="modal__content" onClick={event => event.stopPropagation()}>
        <CurrentParticipant
          initialState={initialState}
          stateButtons={stateButtons}
          setStateButtons={setStateButtons}
        />
      </div>
    </div>
  );
};

export default Modal;
