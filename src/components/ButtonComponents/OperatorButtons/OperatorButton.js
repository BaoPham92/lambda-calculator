import React from "react";

export const OperatorButton = ({
  operator,
  className
}) => (
    <button className={className}>{operator.char ||   operator.value}</button>
  );
