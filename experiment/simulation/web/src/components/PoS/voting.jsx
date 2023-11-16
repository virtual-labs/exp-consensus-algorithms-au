import React from "react";
import "./voting.css";
import VoteMachine2 from "./VoteMachine2";
import VoteMachine from "./VoteMachine";
import { useSelector } from "react-redux";
  
const Voting = (props) => {
  const { candidatesList } = useSelector((state) => state.BlockChainReducer);

  console.log(candidatesList[2]);

  return (
    <center>
    <div>
      {
        candidatesList[2].verified 
        ? <VoteMachine />
        : <VoteMachine2 />
      }
      <div className='next-button'>
      <button 
  style={{borderColor: '#22eff1',marginTop:"-10%"}} 
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
    </div></center>
  );
};

export default Voting;
