import React, { useState } from "react";
import data from '../../../data';
import { SpecialButton } from './SpecialButton';

export const Specials = ({
  set
}) => {

  // State
  const [specs, setSpecs] = useState(data.specials)

  console.log(specs)
  return (
    <div className="left-div">
      {specs.map((index, key) => <SpecialButton className={"button specials"} set={set} special={index}  key={key}/>)}
    </div>
  );
};
