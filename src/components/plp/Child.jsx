import React, { useEffect, useState } from "react";

const Child = ({ setNumber }) => {
  setNumber();
  console.log("Child");

  return (
    <>
      <h1>Child component</h1>
      {/* <h1>{newNumber}</h1>
      <button onClick={newNumber}>Inc Child</button> */}
    </>
  );
};

export default React.memo(Child);
