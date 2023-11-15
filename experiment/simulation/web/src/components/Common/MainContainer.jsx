import React, { Suspense } from "react";
import PosComponent from "../PosComponent";
import PowComponent from "../PowComponent";
import Divider from "../Divider";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearState } from "../../redux/slices/BlockChainReducer";
import Loading from "../Loading";

const MainContainer = () => {
  const [showPoW, setShowPoW] = useState(true);
  const dispatch = useDispatch();

  const handlePowClick = () => {
    setShowPoW(true);
    dispatch(clearState());
  };

  const handlePosClick = () => {
    setShowPoW(false);
    dispatch(clearState());
  };
  const dividerTitle = showPoW ? "Proof of Work" : "Proof of Stake";
  return (
    <div>
      <div className="switches">
        <button
          className={`powbtn ${showPoW ? "active" : ""}`}
          onClick={handlePowClick}
        >
          POW
        </button>
        <button
          className={`posbtn ${showPoW ? "" : "active"}`}
          onClick={handlePosClick}
        >
          POS
        </button>
      </div>
      <Divider title={dividerTitle} />
      <Suspense fallback={<Loading />}>
        {showPoW ? <PowComponent /> : <PosComponent />}
      </Suspense>
    </div>
  );
};

export default MainContainer;
