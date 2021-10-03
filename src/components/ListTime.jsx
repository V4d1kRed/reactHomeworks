import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ListTime = ({time}) => {
  if (!time.length) {
    return (
      <p>Time list is empty</p>
    );
  }

  return (
    <ul className="time">
      {
        time.map(time => {
          return <li className="time__item" key={uuidv4()}>
            {time.hours}:{time.minutes}:{time.seconds}:{time.milliseconds}
          </li>
        })
      }
    </ul>
  );
};

export default ListTime;
