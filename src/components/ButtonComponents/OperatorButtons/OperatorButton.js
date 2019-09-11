import React from "react";

export const OperatorButton = ({
  operator,
  className,
  set
}) => (
    <button
      className={className}
      onClick={() => set(operator.value)}>
      {operator.char || operator.value}
    </button>
  );
