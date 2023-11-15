import React, { useEffect,useState } from 'react';
import './BcStep1.css'

import flowchart from '../images/step1.svg'
import MessagePos from './MsgPos'
import Button from '@mui/material/Button';
const Step3 = ({ onContinueClick }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 10);  

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
       <>
          {/* <p style={{color:"white",marginTop:"5%"}}>Welcome! This is the simulation of an Election Procces based on the concepts of Proof of stake.</p> */}
       <center>
   
       <h4 style={{alignItems:"center",color:"white"}}>2.Avoiding Concentration of Power</h4>
        
      
       <img style={{marginTop:"-110px",marginLeft:"30px"}} src={flowchart} alt="" />
      

             <Button style={{ borderColor: " #22eff1", color: "white" ,marginLeft:"60%",marginTop:"-400px"}} variant="outlined" onClick={onContinueClick} >Continue</Button>
      
   
      
       </center>
       </>
    );
}

export default Step3;
