/* eslint-disable react/prop-types */

const ChordHeader = ({ note, playNote }) => {
  return (
    <div
      className=" bg-sky-700 hover:bg-sky-600 transition-colors text-center rounded cursor-pointer text-xs lg:text-base px-1 lg:px-4 py-3 font-bold  shadow-lg"
      onClick={() => playNote(note)}
    >
      {note}
    </div>
  );
};

export default ChordHeader;
