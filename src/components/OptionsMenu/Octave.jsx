const Octave = ({ options, setOptions }) => {
  const updateOctave = (value) => {
    if (value >= 3 && value <= 6) {
      setOptions({ ...options, octave: value });
    }
  };

  return (
    <div className="flex flex-row w-full items-center gap-2 justify-between bg-black bg-opacity-20 rounded-full py-2 px-6">
      <div className="uppercase font-bold ">Chords octave</div>

      <div className="flex space-x-4 items-center justify-center ">
        <div
          className="bg-white bg-opacity-20 w-10 h-10 flex items-center justify-center rounded-full px-2 font-bold cursor-pointer"
          onClick={() => updateOctave(options.octave - 1)}
        >
          -
        </div>

        <div>{options.octave}</div>

        <div
          className="bg-white bg-opacity-20 w-10 h-10 flex items-center justify-center rounded-full px-2 font-bold cursor-pointer"
          onClick={() => updateOctave(options.octave + 1)}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Octave;
