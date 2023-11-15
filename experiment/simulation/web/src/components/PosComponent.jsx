import React, { useState, useEffect } from "react";
import BasicAccordion from "./PoS/Details";
import Manifesto from "./PoS/Manifesto";
import Login from "./PoS/Login";
import Scene from "./ThreeComponents/Scene";
import Voting from "./PoS/voting";
import Counting from "./PoS/Counting";
import AuthLogin from "./PoS/autority-login";
import CandidateVerification from "./PoS/verify";
import Candidate from "./PoS/candidate";
import InstructionMessagePos from "./PoS/Messages-instr";
import { useDispatch, useSelector } from "react-redux";
import MainAccordion from "./PoS/accordian";

import { Accordion } from "@mui/material";
import Consensus from "./PoS/bc/BcStep1";
import Step2 from "./PoS/bc/BcStep2";
import Step3 from "./PoS/bc/BcStep3";
import Step4 from "./PoS/bc/BcStep4";
import Step5 from "./PoS/bc/Bcstep5";
import Step1 from "./PoS/bc/BcStep1";

const PosComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const [activeComponent, setActiveComponent] = useState(null);
  const [showAccordion, setShowAccordion] = useState(true);
  const [showCandidateVerification, setShowCandidateVerification] =
    useState(false);
  const [showComponents, setShowComponents] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveAccordionChange = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handleAccordionSelect = (index) => {
    setShowAccordion(false);

    switch (index) {
      case 1:
        setActiveComponent("accordionDetails");
        break;
      case 2:
        setActiveComponent("manifesto");
        break;
      case 3:
        setActiveComponent("candidate");
        break;
      case 4:
        setActiveComponent("login");
        break;
      case 5:
        setActiveComponent("counting");
        break;
      default:
        setActiveComponent(null);
    }
  };
  const showVotingPage = () => {
    setActiveComponent("voting");
  };
  const showAuthorityPage = () => {
    setActiveComponent("auth-login");
  };
  const handleSuccessfulAuthorityLogin = () => {
    setActiveComponent("candidateVerification");
  };

  const handleCandidateVerificationSubmit = () => {
    setActiveComponent("candidate");
  };

  const handleCloseDetails = () => {
    setShowAccordion(true);
    setActiveComponent(null);
  };
  const componentDelays = {
    accordionDetails: 10,
    manifesto: 10,
    candidate: 10,
    login: 10,

    voting: 10,

    counting: 10,
  };
  useEffect(() => {
    if (activeComponent) {
      const timer = setTimeout(() => {
        setShowComponents(true);
      }, componentDelays[activeComponent] || 10);

      return () => clearTimeout(timer);
    } else {
      setShowComponents(false);
    }
  }, [activeComponent]);

  const instructions = {
    accordionDetails:
      "This is a simulation of an election process based on the concept of PoS.In an election context, stakeholders as voters.The election news  of 3 different channels are given below. By reviewing these sections, voters can gain insights into a party's influence.In PoS , certain users, called validators, are picked to create new blocks and check transactions based on the stake they hold.",
    manifesto:
      "In election manifestos, political parties are incentivized to make honest promises because they know that they will be held accountable by voters.Review the election manifestos and Select the corresponding party.In PoS, participants are incentivized to act honestly because they have a vested interest in the success and stability of the blockchain.",
    candidate:
      " PoS aims to prevent a concentration of power in a blockchain network by distributing influence based on holdings. In election process Authority can unverify the candidate .The candidate verification status is given below,Click the 'Login as Authority' link to access the authority login page",
    login:
      "In an election, multiple stakeholders, such as election officials and observers, work collaboratively to validate and ensure the integrity of the voting process. To cast your vote, please proceed to the voter verification page provided below. Enter your name and voter ID for authentication. In PoS, validators are responsible for validating transactions and maintaining the integrity of the blockchain.",

    voting:
      " This is the voting machine interface to make your selection.vote corresponding candidate,click the close button to exit.",
    counting:
      "Voters trust that their votes will be counted accurately and that the electoral process will be conducted fairly. This trust is essential for democracy to function properly,To Count the vote, please click the 'Get serial number' button and Click the 'Count' button to to count the votes.To double-check and ensure the integrity of the count, please click the 'Get serial Number' button and click the 'Count' button.This is the final step of the election process.In PoS systems rely on the trustworthiness of validators who have a stake in the network.",

    candidate:
      "In elections, there are often mechanisms in place to avoid a concentration of power, such as checks and balances, term limits, and rules that promote representation of diverse interests.The candidate verification status is given below,Click the 'Login as Authority' to enter the authority Login page ",
    candidateVerification:
      "This is the Verification page where Authority can  verify and unverify a candidate by clicking the corresponding checkbox, after making your selections, click 'Submit' and the system will update, reflecting the verification status changes for the candidates",
    "auth-login":
      "To access the Authority Verification portal using your credentials, and once logged in, you'll be directed to the Verification page.",
  };

  return (
    <>
      <div className="heading"></div>
      <div className="container-fluid container-full-height">
        <div className="row">
          <div className="col-md-8 left-column">
            {currentStep === 1 && (
              <Step1 onContinueClick={() => handleAccordionSelect(1)} />
            )}
            {currentStep === 2 && (
              <Step2 onContinueClick={() => handleAccordionSelect(2)} />
            )}
            {currentStep === 3 && (
              <Step3 onContinueClick={() => handleAccordionSelect(3)} />
            )}
            {currentStep === 4 && (
              <Step4 onContinueClick={() => handleAccordionSelect(4)} />
            )}
            {currentStep === 5 && (
              <Step5 onContinueClick={() => handleAccordionSelect(5)} />
            )}
          </div>
          <div className="col-md-4 right-column">
            {showAccordion && (
              <MainAccordion
                onSelect={handleAccordionSelect}
                activeIndex={activeIndex}
              />
            )}

            {activeComponent && (
              <InstructionMessagePos
                text={instructions[activeComponent]}
                time={10}
                style={{ marginBottom: "10%" }}
              />
            )}
            {showComponents && (
              <>
                {activeComponent === "accordionDetails" && (
                  <BasicAccordion
                    onCloseClick={handleCloseDetails}
                    onStepChange={handleStepChange}
                    onActiveAccordionChange={handleActiveAccordionChange}
                  />
                )}
                {activeComponent === "manifesto" && (
                  <Manifesto
                    onCloseClick={handleCloseDetails}
                    onStepChange={handleStepChange}
                    onActiveAccordionChange={handleActiveAccordionChange}
                  />
                )}
                {activeComponent === "candidate" && (
                  <Candidate
                    onCloseClick={handleCloseDetails}
                    onAuthorityLoginClick={showAuthorityPage}
                    onStepChange={handleStepChange}
                    onActiveAccordionChange={handleActiveAccordionChange}
                  />
                )}
                {activeComponent === "auth-login" &&
                  !showCandidateVerification && (
                    <AuthLogin
                      onSuccessfulLogin={handleSuccessfulAuthorityLogin}
                    />
                  )}
                {activeComponent === "candidateVerification" && (
                  <CandidateVerification
                    onSubmitClick={handleCandidateVerificationSubmit}
                    onActiveAccordionChange={handleActiveAccordionChange}
                  />
                )}

                {activeComponent === "login" && (
                  <Login onNextClick={showVotingPage} />
                )}
                {activeComponent === "voting" && (
                  <Voting
                    onCloseClick={handleCloseDetails}
                    onStepChange={handleStepChange}
                    onActiveAccordionChange={handleActiveAccordionChange}
                  />
                )}
                {activeComponent === "counting" && (
                  <Counting
                    onCloseClick={handleCloseDetails}
                    onStepChange={handleStepChange}
                    onActiveAccordionChange={handleActiveAccordionChange}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PosComponent;
