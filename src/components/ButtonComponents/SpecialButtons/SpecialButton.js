import React from "react";

export const SpecialButton = ({
  special,
  className,
  set
}) => (
    <button
      className={className}
      onClick={() => set(special)}>
      {special}
    </button>
  );
