import React, { useState } from "react";
import data from '../../../data'
import { NumberButton } from './NumberButton'

export const Numbers = ({
  currentOpt,
  total,
  set,
  prev
}) => {

  // State
  const [nums, setNums] = useState(data.numbers)

  // Log data
  console.log(nums)

  return (
    <div className="left-div">
      {nums.map((index, key) => {
        // Before any after additions of new inputs, set the previous input.
        if (!!prev === false) {
          total(0)
        } else {
          total(prev)
        }

        // Conditionals for button rendering for specific styles
        if (index !== '0' && index !== '.') {
          return <NumberButton
            className="button numbers"
            currentOpt={currentOpt}
            prev={prev}
            set={set}
            number={index}
            total={total}
            key={key}
          />
        } else if (index === '0') {
          return <NumberButton
            className="button numbers num-zero"
            currentOpt={currentOpt}
            prev={prev}
            set={set}
            number={index}
            total={total}
            key={key}
          />
        } else if (index === '.') {
          return <NumberButton
            className="button numbers"
            currentOpt={currentOpt}
            prev={prev}
            set={set}
            number={index}
            total={total}
            key={key}
          />
        }
      })}
    </div>
  );
};
