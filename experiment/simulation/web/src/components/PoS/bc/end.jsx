import React, { useEffect, useState } from "react";
import "./BcStep1.css";

import flowchart from "../images/end.svg";
import MessagePos from "./MsgPos";
import Button from "@mui/material/Button";
const End = ({ onContinueClick }) => {
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
        <img
          style={{ marginTop: "-135px", marginLeft: "30px" }}
          src={flowchart}
          alt=""
        />
      </center>
    </>
  );
};

export default End;
