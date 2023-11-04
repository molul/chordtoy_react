/* eslint-disable react/prop-types */

const ChordHeader = ({ note, playNote }) => {
  return (
    <div
      className=" bg-mainOlive text-zinc-800 hover:bg-sky-500 transition-colors text-center rounded cursor-pointer text-sm lg:text-base px-1 lg:px-4 py-2 font-bold  shadow-lg"
      onClick={() => playNote(note)}
    >
      {note}
    </div>
  );
};

export default ChordHeader;
