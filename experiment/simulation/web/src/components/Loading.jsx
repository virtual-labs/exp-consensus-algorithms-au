import { Html } from "@react-three/drei";
import React from "react";
import { RevolvingDot } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <RevolvingDot
        radius="25"
        strokeWidth="3"
        color="white"
        secondaryColor="#1bfaff"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{ width: 150, height: "150px", background: "#022027" }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
