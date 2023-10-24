// eslint-disable-next-line react/prop-types
const Chord = ({ chordNote, chord, playFunc }) => {
  return (
    <div
      className="bg-sky-700 p-4 w-20 text-center rounded cursor-pointer"
      onClick={() => playFunc(chordNote, chord)}
    >
      {chordNote + chord}
    </div>
  );
};

export default Chord;
