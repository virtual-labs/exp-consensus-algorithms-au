import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import { Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import { onClickLeft } from "../redux/slices/BlockChainReducer";

const InstructionMessage = ({ text }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [starts, setStarts] = useState(true); 
  const dispatch = useDispatch();
  const { ifClickLeft, userIntract,task } = useSelector(
    (state) => state.BlockChainReducer
  );

  const onHandleClick = () => {
    if (!userIntract) {
      dispatch(onClickLeft(!ifClickLeft));
    } else {
      alert("Complete the task ");
    }
  };

  useEffect(() => {
    const showBtnTimer = setTimeout(() => {
      setShowBtn(true);
  
    }, 2000);

    if (starts) {
      setStarts(false); 
    }

    return () => {
      clearTimeout(showBtnTimer);
    };
  }, [starts]);

  return (
    <div style={{ color: "white" }}>
      <h5
        style={{
          marginLeft: -1,
        }}
      >
        Instructions
      </h5>
      <div style={{ marginTop: "25px" }}>
        <div>{text}</div>
        {showBtn && (
          <Button
            sx={{ marginTop: 3, marginLeft: -1 }}
            onClick={onHandleClick}
            style={{}}
          >
            <Typography
              style={{
                color: "#1bfaff",
                fontSize: 15,
                display: "flex",
                alignItems: "center",
              }}
            >
              {task===1 ? "Start" : "Continue"} 
              <ChevronRightIcon />
            </Typography>
          </Button>
        )}
      </div>
    </div>
  );
};

export default InstructionMessage;
