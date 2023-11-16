import React, { useState,useSelector } from 'react';
import './counting.css';
import Button from '@mui/material/Button';
const Counting = (props) => {
    const [isCounted, setIsCounted] = useState(false);
    const [reCounted, setReCounted] = useState(false);
    const [serialNumber, setSerialNumber] = useState('');
    const [reEnteredSerialNumber, setReEnteredSerialNumber] = useState(''); 
    const [errorMessage, setErrorMessage] = useState(''); 
    const handleGetSerialClick = () => {
        setSerialNumber("VMSN4321");
    };
    const handleGetSerialReClick = () => {
        setReEnteredSerialNumber("VMSN4321");
    };
    const handleCountClick = (e) => {
        e.preventDefault();
        if (serialNumber === "VMSN4321") {
            setIsCounted(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid Serial Number. Please check and try again.');
            setIsCounted(false);
        }
    };

    const handleReCountClick = (e) => {
        e.preventDefault();
        if (reEnteredSerialNumber === "VMSN4321") { 
            setReCounted(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid Serial Number. Please check and try again.');
            setReCounted(false);
        }
    };

    return (
        <>
            <div>
             
            </div>
            <center>
                <h5 style={{ color: "white" }}>Vote Count Verification</h5>
                <Button  onClick={handleGetSerialClick}>Get Serial Number</Button>

                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control vote-ip" 
                        placeholder="Serial No" 
                        value={serialNumber} 
                        onChange={(e) => setSerialNumber(e.target.value)}
                        aria-label="Serial Number" 
                        aria-describedby="button-addon2"
                    />
                    <button className="btn btn-outline-secondary " type="button" id="button-addon2" onClick={handleCountClick}>
                        Count
                    </button>
                </div>

              
                {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}

                {isCounted && (
                    <div className='vote'>
                        <h6 style={{padding:"5px"}}>Initial Count</h6>
                        <p>Amit Trived:100</p>
                        <p>Vikram Patel:123</p>
                        <p>Geetha Jeeva:88</p>
                    </div>
                )}
 <Button onClick={handleGetSerialReClick}>Get Serial Number</Button>
                <div className="input-group mb-3">
               
                    <input 
                        type="text" 
                        className="form-control vote-ip" 
                        placeholder="Serial Number" 
                        value={reEnteredSerialNumber} 
                        onChange={(e) => setReEnteredSerialNumber(e.target.value)} 
                        aria-label="Re-enter Serial Number" 
                        aria-describedby="button-addon3"
                    />
                    
                    <button className="btn btn-outline-secondary" type="button" id="button-addon3" onClick={handleReCountClick}>
                       Re-Count
                    </button>
                </div>

                {reCounted && (<>
                    <div className='vote'>
                        <h6  style={{padding:"5px"}}>Re Count</h6>
                        <p>Amit Trived:100</p>
                        <p>Vikram Patel:123</p>
                        <p>Geetha Jeeva:88</p>
                    
                    </div>
                     <h6 style={{ color: "green",marginTop:"3%" }}>Vote Count Verified</h6></>
                )}
            </center>
            <div className='next-button'>
            <button 
  style={{borderColor: '#22eff1'}} 
  type="button" 
  className="btn btn-outline-light details-btn" 
  onClick={() => {
      props.onCloseClick();
      props.onStepChange(); 
      props.onActiveAccordionChange(); 
  }}
>
  Close
</button>
          </div>
        </>
    );
}

export default Counting;
