import React, { createContext, useState } from "react";

const OptionsContext = createContext();

const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState({ octave: 3 });

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

export { OptionsProvider, OptionsContext };
