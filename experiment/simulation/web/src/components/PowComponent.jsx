import React from "react";
import Login from "../components/Common/Login";
import Scene from "./ThreeComponents/Scene";
import Token from "./PoW/Token";
import Timer from "./PoW/Timer";
import VotingComponent from "./PoW/VotingComponent";
import { useState } from "react";
import Report from "./PoW/Report";
import LoginAuth from "./PoW/LoginAuth";
import Notification from "./PoW/Notification";
import Tables from "./PoW/Table";
import CheckboxCard from "./PoW/CheckBox";
import Alert from "./PoW/Alert";
import { useDispatch, useSelector } from "react-redux";
import InstructionMessage from "./Instruction";
import {
  updateSelectedCardIndex,
  updateTask,
  updateUserInteract,
} from "../redux/slices/BlockChainReducer";

export default function PowComponent() {
  const { userIntract, task, selectedCardIndex } = useSelector(
    (state) => state.BlockChainReducer
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState("login");
  const [token, setToken] = useState("");
  const [showTimer, setShowTimer] = useState(false);

  const [votingData, setVotingData] = useState(null);
  const [userName, setUserName] = useState("");
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const nextIndex =
    selectedCardIndex.length > 0
      ? (selectedCardIndex[selectedCardIndex.length - 1] + 1) % 4
      : 0;
  function getRandomColor() {
    return Math.random() < 0.5 ? "green" : "red";
  }
  const showName = (userName) => {
    dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
    dispatch(updateUserInteract(false));
    dispatch(updateTask(2));

    setUserName(userName.name);
    console.log(userName);
  };
  const handleLoginClose = () => {
    setCurrentPage("token");
    setShowTimer(true);
  };

  const handleTokenClose = () => {
    dispatch(updateSelectedCardIndex([...selectedCardIndex, nextIndex]));
    dispatch(updateUserInteract(false));
    dispatch(updateTask(3));
    setCurrentPage("votingComponent");
  };
  const handleTable = () => {
    setCurrentPage("tables");
  };
  const handleReport = () => {
    setCurrentPage("report");
  };

  const handleNotification = () => {
    setCurrentPage("notification");
  };
  const handleLoginauth = () => {
    setCurrentPage("loginAuth");
  };
  const handleCheckbox = () => {
    setCurrentPage("checkbox");
  };
  const handleAlert = () => {
    setCurrentPage("alert");
  };
  const handleVote = () => {
    setCurrentPage("vote");
    setCurrentColor("green");
  };
  const showTables = (votingData) => {
    setVotingData(votingData);
    setCurrentPage("tables");
    console.log(votingData);
  };

  return (
    <>
      <div className="App">
        <div className="container-fluid container-full-height">
          <div className="row">
            <div className="col-md-9 left-column">
              <Scene />
            </div>
            <div className="col-md-3 right-column">
              {task > 2 && <Timer initialTime={300} />}
              {currentPage === "login" && userIntract && task === 1 ? (
                <Login
                  generateRandomToken={() => {}}
                  setCurrentPage={handleLoginClose}
                  onButtonClick={showName}
                />
              ) : null}

              {currentPage === "token" && userIntract && task === 2 ? (
                <>
                  <Token onClose={handleTokenClose} />
                </>
              ) : null}

              {currentPage === "votingComponent" &&
              userIntract &&
              task === 3 ? (
                <>
                  <VotingComponent
                    onClick={handleReport}
                    onChange={handleTable}
                    showTables={showTables}
                    userName={userName}
                    currentColor={currentColor}
                  />
                </>
              ) : null}

              {currentPage === "tables" && userIntract && task === 4 ? (
                <>
                  <Tables
                    userName={votingData.userName}
                    time={votingData.time}
                    status={votingData.status}
                  />
                </>
              ) : null}

              {currentPage === "report" ? (
                <Report onClick={handleNotification} />
              ) : null}
              {currentPage === "notification" ? (
                <Notification onClick={handleLoginauth} />
              ) : null}
              {currentPage === "loginAuth" ? (
                <LoginAuth onClick={handleCheckbox} />
              ) : null}
              {currentPage === "checkbox" ? (
                <CheckboxCard onClick={handleAlert} />
              ) : null}
              {currentPage === "alert" ? <Alert onClick={handleVote} /> : null}
              {currentPage === "vote" ? (
                <VotingComponent
                  onChange={handleTable}
                  showTables={showTables}
                  userName={userName}
                  currentColor={currentColor}
                />
              ) : null}
              {!userIntract && task === 1 && (
                <InstructionMessage
                  text={
                    "In this simulation, we will explore the concept of Proof of Work (PoW) through an election scenario.During this simulation, think of the election as our blockchain. Voters, like blockchain participants, will need to provide proof of their eligibility, just as PoW ensures the legitimacy of transactions in the blockchain. click the below button to start the process."
                  }
                />
              )}
              {!userIntract && task === 2 && (
                <InstructionMessage
                  text={
                    "We've seen  that PoW prevents double-spending in cryptocurrencies, and similarly, in elections, it's vital to prevent individuals from casting multiple votes.To prevent double voting, we've created a special 'token' for each voter, think of the 'token' as a cryptographic key, and the 'timer' as the time it takes for the PoW to complete."
                  }
                />
              )}
              {!userIntract && task === 3 && (
                <InstructionMessage
                  text={
                    "Each voting machine has an indicator light. A 'green light' indicates that the machine is tamper-free, and the voter can cast their vote without concern.However, if the light turns 'red,' it means the machine might have been tampered with. Just as in PoW, where a node is suspected of being incorrect and reported"
                  }
                />
              )}
              {!userIntract && task === 4 && (
                <InstructionMessage
                  text={
                    "After you've cast your vote using the secure voting machine, a table will appear on the screen.The purpose of this table is to ensure public verification, similar to the transparency offered by blockchain technology, where the transactions are visible to participants."
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
