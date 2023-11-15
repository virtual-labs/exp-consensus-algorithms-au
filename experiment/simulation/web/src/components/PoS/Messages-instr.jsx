import React, { useState, useEffect } from "react";
import Typist from "react-typist";

import { useDispatch, useSelector } from "react-redux";

const InstructionMessagePos = ({ text, time }) => {
  const [showBtn, setShowBtn] = useState(false);
  const dispatch = useDispatch();
  const { ifClickLeft, userIntract } = useSelector(
    (state) => state.BlockChainReducer
  );
 
  useEffect(() => {
    const showBtnTimer = setTimeout(() => {
      setShowBtn(true);
    }, time);

    return () => {
      clearTimeout(showBtnTimer);
    };
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h5
        style={{
          marginLeft: -1,
        }}
      >
        Instructions
      </h5>
      <div style={{ marginTop: "35px",marginBottom:'30px' }}>
       
       <p>{text}</p>
        {/* {showBtn && (
          <Button
            sx={{ marginTop: 5, marginLeft: -1 }}
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
              Continue
              <ChevronRightIcon />
            </Typography>
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default InstructionMessagePos;
