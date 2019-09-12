import React, { useState } from "react";
import data from '../../../data';
import { SpecialButton } from './SpecialButton';

export const Specials = ({
  currentOp,
  set
}) => {

  // State
  const [specs, setSpecs] = useState(data.specials)

  // console.log(specs)
  return (
    <div className="left-div">
      {specs.map((index, key) => {
        // Before any other actions, update previous operator
        if (currentOp) {
          set(currentOp)
        }

         return  <SpecialButton className={"button specials"} set={set} special={index}  key={key}/>
        })}
    </div>
  );
};
