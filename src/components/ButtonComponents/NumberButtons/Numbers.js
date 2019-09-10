import React, { useState } from "react";
import data from '../../../data'
import { NumberButton } from './NumberButton'

export const Numbers = () => {

  // State
  const [nums, setNums] = useState(data.numbers)

  // Log data
  console.log(nums)

  return (
    <div className="left-div">
      {nums.map((index, key) => {
        if (index !== '0' && index !== '.') {
          return <NumberButton className="button numbers" number={index} key={key} />
        } else if (index === '0') {
          return <NumberButton className="button numbers num-zero" number={index} key={key} />
        }else if (index === '.') {
          return <NumberButton className="button numbers" number={index} key={key} />
        }
      })}
    </div>
  );
};
