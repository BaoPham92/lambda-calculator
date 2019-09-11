import React from "react";

export const NumberButton = ({
  number,
  className,
  total,
  prev,
  set
}) => (
    <button
      className={className}
      onClick={() => {
        // Combine previous with new input
        set(prev + number)        
      }}>
      {number}
    </button>
  );
