import React, { useState } from "react";
import data from '../../../data'
import { NumberButton } from './NumberButton'

export const Numbers = () => {

  // State
  const [nums, setNums] = useState(data.numbers)

  // Log data
  console.log(nums)

  return (
    <div>
      {nums.map((index, key) => <NumberButton number={index} key={key}/>)}
    </div>
  );
};
