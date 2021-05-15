import React from "react";

const FallbackComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 44px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
};

export default FallbackComponent;
