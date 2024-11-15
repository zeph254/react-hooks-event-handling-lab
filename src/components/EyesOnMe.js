// Code EyesOnMe Component Here
import React from "react";

export default  function EyesOnMe() {
  function handleFocus () {
console.log("Good!");
  }

  function  handleBlur () {
  console.log("Hey! Eyes on me!");

  }
    return (
    <button onFocus={handleFocus}  onBlur={handleBlur}>Eyes on me</button>
)}