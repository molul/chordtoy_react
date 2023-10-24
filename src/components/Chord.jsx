// eslint-disable-next-line react/prop-types
const Chord = ({ chordNote, chord, playFunc }) => {
  return (
    <div
      className="bg-sky-700 hover:bg-sky-600 transition-colors text-center rounded cursor-pointer text-sm lg:text-base w-16 lg:w-20 px-2 lg:px-4 py-4"
      onClick={() => playFunc(chordNote, chord)}
    >
      {chordNote + chord}
    </div>
  );
};

export default Chord;
