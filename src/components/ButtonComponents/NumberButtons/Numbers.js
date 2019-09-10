import React from "react";
import data from '../../../data'
import { NumberButton } from './NumberButton'

export const Numbers = () => {

  // Variables
  const {
    numbers
  } = data

  // Log data
  console.log(numbers)

  return (
    <div>
      {numbers.map((index, key) => <NumberButton number={index} key={key}/>)}
    </div>
  );
};
