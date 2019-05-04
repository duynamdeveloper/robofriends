import React from "react";

const Scroll = props => {
  return (
    <div
      style={{ overflowY: "scroll", height: "600px", border: "2px solid #333" }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
