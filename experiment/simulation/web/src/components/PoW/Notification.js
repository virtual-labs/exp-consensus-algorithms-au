import React from 'react';
import { useState } from 'react';
import LoginAuth from './LoginAuth';
function Notification({ onClick,onLoginClick }) {

const [showlogin,setShowLogin]= useState(false)

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Official's Notification</h5>
            <button type="button" className="close" onClick={onLoginClick}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>you have one issue reported !</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn reportbtn" onClick={onClick}>
              Login
            </button>
            {showlogin && <LoginAuth />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
