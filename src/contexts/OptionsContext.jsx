import React, { createContext, useState } from "react";

const OptionsContext = createContext();

const OptionsProvider = ({ children }) => {
  // Define the shared variable and its initial value
  const [options, setOptions] = useState({ octave: 5 });

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

export { OptionsProvider, OptionsContext };
