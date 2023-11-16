import React, { useState } from "react";

function AuthLogin({ onSuccessfulLogin }) {
  const [name, setName] = useState("");
  const [voterid, setVoterid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleVoteridChange = (e) => {
    setVoterid(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pattern = /^[A-Za-z]{4}\d{6}$/;

    if (pattern.test(voterid)) {
      setErrorMessage("");
      onSuccessfulLogin();
    } else {
      setErrorMessage(
        "Invalid Voter ID. ID Should Start With 4 Letters Followed With 6 Numbers."
      );
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Authority Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Reg ID:</label>
          <input
            type="text"
            className="form-control"
            placeholder="E.g; ABXD123456"
            value={voterid}
            onChange={handleVoteridChange}
            required
          />
        </div>
        <center>
          {/* <button type="submit" className="btn btn-primary"onClick={props.onSuccessfulLogin}>
                    Login
                </button> */}
          <button type="submit" className="btn btn-primary">
            Verify
          </button>
        </center>
      </form>
      {errorMessage && (
        <div className="alert alert-danger mt-3">{errorMessage}</div>
      )}
    </div>
  );
}

export default AuthLogin;
