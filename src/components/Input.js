import React from "react";

const Input = (props) => {
  return (
    <div>
      <h2>Enter Your Input Here</h2>
      <textarea
        className="input"
        rows="50"
        cols="100"
        onChange={(e) => {
          props.settext(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Input;
