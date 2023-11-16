import React from 'react';
import Select from 'react-select';
import Notification from './Notification';
import { useState } from 'react';
import LoginAuth from './LoginAuth';
import Messages from '../Message';

export default function Report({onClick}) {
  const options = [
    { value: 'light',label: 'green light detection failed ' },
    { value: 'sound', label: 'Sound detection failed' },
    { value: 'serial', label: 'Serial number mismatched' },
  ];
  const [showNotification, setShowNotification] = useState(false);
 


  

  
  
  return (<>
  <Messages text={"select from the option to report the issue so that the voting machine can be replaced "}/>
    <div className="container">
      <div className="mt-5 mx-auto ">
        <div className="card reportcard ">
          <div className="card-body">
            <h5 className="card-title">Report Issue</h5>
            <Select options={options} />
            <button className="btn btn-primary mt-2" onClick={onClick}>Fix the issue</button>
            {showNotification && <Notification />}
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
