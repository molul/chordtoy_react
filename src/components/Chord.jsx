// eslint-disable-next-line react/prop-types
const Chord = ({ chordNote, chordType, playFunc }) => {
  return (
    <div
      className="bg-sky-700 hover:bg-sky-600 transition-colors text-center rounded cursor-pointer text-xs lg:text-base w-12 lg:w-20 px-1 lg:px-4 py-3"
      onClick={() => playFunc(chordNote, chordType)}
    >
      {chordNote + chordType}
    </div>
  );
};

export default Chord;
