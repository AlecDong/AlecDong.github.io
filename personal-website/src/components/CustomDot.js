import React from "react";
const CustomDot = ({ onClick, ...rest }) => {
    const {
      active,
    } = rest;
    return (
        <button
            className={active ? "active" : "inactive"}
            onClick={() => onClick()}
        >
        </button>
      
    );
  };
export default CustomDot;