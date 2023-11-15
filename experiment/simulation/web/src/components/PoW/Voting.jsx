import React, { useState } from "react";
import VoterMachine from "../common/VotingMachine";
import VotingComponent from "./VotingComponent";

const Voting = ({ userName, showTable, setCurrentPage, type = "" }) => {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [isVotingMachineVisible, setIsVotingMachineVisible] = useState(false);
 const [showText,setShowText] = useState(true)
  // card close
  const onHandleSkip = () => {
    setIsCardVisible(false);
  };
  // tampered button
  const onHandleTamperedClick = () => {
    setIsVotingMachineVisible(!isVotingMachineVisible);
  };
  const title = !isVotingMachineVisible ? "tampered" : "tamper free";
  return (
    <>
      {!isVotingMachineVisible ? (
        <>
          {type !== "votingMachine" &&showText&& (
            <h4 style={{ color: "white", fontSize: 20 }}>Tampered Free</h4>
          )}

          <VotingComponent
            setCurrentPage={setCurrentPage}
            setShowText={setShowText}
            userName={userName}
            showTable={showTable}
          />
        </>
      ) : (
        <>
          {type !== "votingMachine" &&showText&& (
            <h4 style={{ color: "white", fontSize: 20 }}>Tampered</h4>
          )}
          <VoterMachine    setShowText={setShowText} setCurrentPage={setCurrentPage} />
        </>
      )}

      {isCardVisible && type !== "votingMachine" && showText&& (
        <div className="card-body">
          <p style={{ color: "white", fontSize: 16 }}>
            To understand how the {title} scenario works, click on the button.
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p
              style={{ cursor: "pointer", color: "rgb(27, 250, 255)" }}
              onClick={onHandleTamperedClick}
            >
              {!isVotingMachineVisible ? "Tampered" : "Tampered Free"}
            </p>
            <p
              style={{ cursor: "pointer", color: "rgb(27, 250, 255)" }}
              onClick={onHandleSkip}
            >
              skip
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Voting;
