import React from "react";
import Navigation from "../navigation";

const Wrapper = ({ children }) => {
  return (
    <>
      <Navigation />
      <div style={{ marginTop: "24px" }}>{children}</div>
    </>
  );
};

export default Wrapper;
