import { Center } from "@react-three/drei";
import React from "react";
import { useSelector } from "react-redux";


const Candidate = (props) => {
  const { candidatesList } = useSelector((state) => state.BlockChainReducer);
  console.log(candidatesList);

  return (

    <div style={{ color: "white" ,marginLeft:"20px"}}>
        <h4>Candidate verificarion Status</h4>
  
      {candidatesList.map((candidate) => (
        <div key={candidate.id}>
          <p>{candidate.name}</p>
          <p>
            {candidate.verified ? (
              <span style={{ color: "green" }}>Candidate is verified for the election process</span>
            ) : (
              <span style={{ color: "red" }}>Candidate is not verified for the election process</span>
            )}
          </p>
        </div>
      ))}
      <div className="next-button">
      <button 
  style={{borderColor: '#22eff1',marginRight:"10%"}} 
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
       <a style={{color:"#007bff"}}
          onClick={props.onAuthorityLoginClick}
          className="authority-login-link"
        >
          Login as Authority
        </a>
    </div>
  );
};

export default Candidate;
