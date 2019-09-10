import React, { useState } from "react";
import data from '../../../data';
import { OperatorButton } from './OperatorButton';

export const Operators = () => {
  
  // State
  const [ops, setOps] = useState(data.operators)

  console.log(ops)
  return (
    <div className="right-div">
      {ops.map((index, key) => <OperatorButton  className={"button operators"} operator={index} key={key}/>)}
    </div>
  );
};
