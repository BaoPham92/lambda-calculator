import React, { useState } from "react";
import data from '../../../data';
import { OperatorButton } from './OperatorButton';

export const Operators = ({
  currentOp,
  set
}) => {
  
  // State
  const [ops, setOps] = useState(data.operators)

  // console.log(ops)
  return (
    <div className="right-div">
      {ops.map((index, key) => {
        // Before any other actions, update previous operator
        if (currentOp) {
          set(currentOp)
        }

        return <OperatorButton className={"button operators"} set={set} operator={index} key={key}/>
      })}
    </div>
  );
};
