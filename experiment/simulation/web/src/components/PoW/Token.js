import React from 'react';
import Timer from './Timer';





function Token({ onClose, showTimer }) {
  return (
    <div className="card tokencard">
      <div className="card-body">
        <h5 className="card-title tokenhead">Your token has been successfully generated! </h5>
        <p className="card-text"></p>
        <button className="btn btns" onClick={onClose}>
          Close
        </button>
      </div>
      {showTimer && <Timer timeLeft={300} onClose={onClose} />}
    </div>
  );
}

export default Token;
    