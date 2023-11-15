import React, { useState, useEffect } from "react";
import Typist from "react-typist";

import { useDispatch, useSelector } from "react-redux";

const MessagePos = ({ text, time }) => {
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
        Explanation
      </h5>
      <div style={{ marginTop: "35px",marginBottom:'30px' }}>
       <p>{text}</p>
       
      </div>
    </div>
  );
};

export default MessagePos;
