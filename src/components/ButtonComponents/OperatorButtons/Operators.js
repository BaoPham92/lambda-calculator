import React, { useState } from "react";
import data from '../../../data';
import { OperatorButton } from './OperatorButton';

export const Operators = ({
  set
}) => {
  
  // State
  const [ops, setOps] = useState(data.operators)

  console.log(ops)
  return (
    <div className="right-div">
      {ops.map((index, key) => <OperatorButton className={"button operators"} set={set} operator={index} key={key}/>)}
    </div>
  );
};
