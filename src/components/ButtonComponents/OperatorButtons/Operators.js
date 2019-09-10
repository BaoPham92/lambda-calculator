import React, { useState } from "react";
import data from '../../../data';
import { OperatorButton } from './OperatorButton';

export const Operators = () => {
  
  // State
  const [ops, setOps] = useState(data.operators)

  console.log(ops)
  return (
    <div>
      {ops.map((index, key) => <OperatorButton operator={index} key={key}/>)}
    </div>
  );
};
