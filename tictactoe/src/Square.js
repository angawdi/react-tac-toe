import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.markIt}>
      {props.mark}
    </button>
  );
}

export default Square;
