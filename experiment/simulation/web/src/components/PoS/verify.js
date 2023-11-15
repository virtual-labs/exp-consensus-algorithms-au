import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheck } from "../../redux/slices/BlockChainReducer";

const CandidateVerification = ({ onSubmitClick}) => {
  const { candidatesList } = useSelector((state) => state.BlockChainReducer);
  const dispatch = useDispatch();
  const rules = [
    "Resident of the State",
    "Minimum Age Requirement",
    "No Criminal Record",
    "Completed Education",
    "Pays Taxes",
  ];

  const handleCheck = (candidateId, checkIndex) => {
    dispatch(toggleCheck({ candidateId, checkIndex }));
  };

  return (
    <>
      <div style={{ color: "white" }}>
        <h3>Candidates Verification</h3>
        {candidatesList.map((candidate, candidateIndex) => (
          <div key={candidate.id}>
            <h4>{candidate.name}</h4>
            {candidateIndex > 1 && candidate.checks.map((check, index) => (
              <div key={index}>
                <label>
                  <input
                    style={{ marginRight: "20px" }}
                    type="checkbox"
                    checked={check}
                    onChange={() => handleCheck(candidate.id, index)}
                  />
                  {rules[index]}
                </label>
              </div>
            ))}
            <div>
              {candidateIndex < 2 || candidate.verified ? (
                <span style={{ color: "green" }}>Verified</span>
              ) : (
                <span style={{ color: "red" }}>Not Verified</span>
              )}
            </div>
            <hr />
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
    </>
  );
};

export default CandidateVerification;
