import { OptionsContext } from "../../contexts/OptionsContext";
import { useState, useContext } from "react";
import Octave from "../OptionsMenu/Octave";

const MenuMobile = ({ menuOpen }) => {
  const { options, setOptions } = useContext(OptionsContext);

  const updateOctave = (value) => {
    if (value >= 3 && value <= 6) {
      setOptions({ ...options, octave: value });
    }
  };

  return (
    <div
      className={`flex justify-center z-40 pt-16 absolute font-serif text-base h-full bg-mainPurple bg-opacity-95 transition-all duration-300 w-full backdrop-blur-sm  ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-start z-40 max-w-lg px-2 font-sans text-base h-full transition-all duration-300 w-full `}
      >
        <div className="py-4 uppercase font-bold text-2xl">Options</div>

        {/* Options */}
        <div className="w-full">
          <Octave options={options} setOptions={setOptions} />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
