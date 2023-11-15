
import React, { useState } from 'react';
import VotingComponent from './VotingComponent';
import Messages from '../Message';



export default function Alert({onClick}) {
    const [showAlert, setShowAlert] = useState(false);

    

  return (<>
   <Messages text={"By clicking the 'Continuing' button, allow users to proceed with the newly replaced, secure voting machine. just as in PoW, where successful verification allows transactions to be included in the blockchain."} />
    <div className="alerts">
        
      <div className="card alerts" style={{ width: '20rem' ,marginLeft: 30}}>
      <i className="fa-solid fa-square-check" style={{ fontSize: '5em', textAlign: 'center', display: 'block', margin: '5% auto' }}></i>
         <div className="card-body">
          <h5 className="alerthead">Success!</h5>
          <p className="card-text">
         Secruity check completed successfully, voting machine is secure to use , continue with your voting process.
          </p>
          <button  onClick={onClick}  className="btn btnss" >
          Continue
          </button>
          {showAlert && <VotingComponent />}
        </div>
      </div>
      </div>
      </>
  );
}
