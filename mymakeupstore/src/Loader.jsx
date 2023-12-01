import React from "react";
import { grid } from "ldrs";

grid.register();

const Loader = () => {
  return (
    <div>
      <l-grid size="60" speed="1.5" color="black"></l-grid>
    </div>
  );
};

export default Loader;
