import React, { useState } from "react";
import data from '../../../data';
import { SpecialButton } from './SpecialButton';

export const Specials = () => {

  // State
  const [specs, setSpecs] = useState(data.specials)

  console.log(specs)
  return (
    <div className="left-div">
      {specs.map((index, key) => <SpecialButton className={"button specials"} special={index}  key={key}/>)}
    </div>
  );
};
