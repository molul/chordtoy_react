// eslint-disable-next-line react/prop-types
const Chord = ({ chordNote, chordType, playFunc }) => {
  return (
    <div
      className="bg-sky-600 hover:bg-sky-500 transition-colors text-center rounded cursor-pointer text-xs lg:text-base px-1 lg:px-4 py-3 shadow-lg"
      onClick={() => playFunc(chordNote, chordType)}
    >
      {chordNote + chordType}
    </div>
  );
};

export default Chord;
