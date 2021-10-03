import React, {useEffect, useState} from 'react';
import Button from "./UI/button/Button";
import ListTime from "./ListTime";

const Stopwatch = () => {
  const listTime = JSON.parse(localStorage.getItem('time')) || [];
  const [time, setTime] = useState(listTime);
  const [stateStart, setStateStart] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    setHours(hours => hours < 10 ? '0' + hours : hours);
    setMinutes(minutes => minutes < 10 ? '0' + minutes : minutes);
    setSeconds(seconds => seconds < 10 ? '0' + seconds : seconds);
    setMilliseconds(milliseconds => milliseconds < 10 ? '0' + milliseconds : milliseconds);
  }, []);

  const addCurrentTime = () => {
    const currentTime = {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds
    };
    setTime([...time, currentTime]);
    listTime.push(currentTime);
    localStorage.setItem('time', JSON.stringify(listTime));
  };

  const getTime = () => {
    const id = setInterval(() => {
      milliseconds++;
      setMilliseconds(milliseconds < 10 ? '0' + milliseconds : milliseconds);
      if (milliseconds > 99) {
        milliseconds = 0;
        setMilliseconds(milliseconds => '0' + (milliseconds - milliseconds));
        seconds++;
        setSeconds(seconds < 10 ? '0' + seconds : seconds);
      }
      if (seconds > 59) {
        seconds = 0;
        setSeconds(seconds => '0' + (seconds - seconds));
        minutes++;
        setMinutes(minutes < 10 ? '0' + minutes : minutes);
      }
      if (minutes > 59) {
        minutes = 0;
        setMinutes(minutes => '0' + (minutes + minutes));
        hours++;
        setHours(hours < 10 ? '0' + hours : hours);
      }
      setIntervalId(id);
      return () => clearInterval(id);
    }, 10);
  };

  const startStopwatch = () => {
    getTime();
    setStateStart(false);
  };

  const continueStopwatch = () => {
    clearInterval(intervalId);
    getTime();
  };

  const stopStopwatch = () => {
    clearInterval(intervalId);
    addCurrentTime();
  };

  const resetStopwatch = () => {
    clearInterval(intervalId);
    setHours(hours => '0' + (hours - hours));
    setMinutes(minutes => '0' + (minutes - minutes));
    setSeconds(seconds => '0' + (seconds - seconds));
    setMilliseconds(milliseconds => '0' + (milliseconds - milliseconds));
    setStateStart(true);
    addCurrentTime();
  };

  return (
    <div className="stopwatch">
      <div className="container">
        <div className="stopwatch__body">
          <h1 className="stopwatch__time">{hours}:{minutes}:{seconds}:{milliseconds}</h1>
          <div className="stopwatch__buttons">
            {stateStart
              ?
              <Button onClick={startStopwatch} style={{backgroundColor: '#4CB560'}}>Start</Button>
              :
              <Button onClick={continueStopwatch} style={{backgroundColor: '#7E49DB'}}>Continue</Button>
            }
            <Button onClick={stopStopwatch} style={{backgroundColor: '#E15353'}}>Stop</Button>
            <Button onClick={resetStopwatch} style={{backgroundColor: '#F6AD58'}}>Reset</Button>
          </div>
          <ListTime time={time}/>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
