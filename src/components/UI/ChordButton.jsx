// eslint-disable-next-line react/prop-types
const ChordButton = ({ chordNote, chordType, playFunc }) => {
  return (
    <div
      className="text-white bg-mainTeal hover:bg-mainTealLight hover:text-white transition-colors duration-200 text-center rounded cursor-pointer px-1 lg:px-0 py-2 shadow-lg"
      onClick={() => playFunc(chordNote, chordType)}
    >
      {chordNote + chordType}
    </div>
  );
};

export default ChordButton;
