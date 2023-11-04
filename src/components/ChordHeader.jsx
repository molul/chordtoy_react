/* eslint-disable react/prop-types */

const ChordHeader = ({ note, playNote }) => {
  return (
    <div
      className=" bg-mainOlive text-zinc-700 hover:bg-mainOliveLight transition-colors text-center rounded cursor-pointer text-sm md:text-base px-1 lg:px-4 py-2 font-bold  shadow-lg"
      onClick={() => playNote(note)}
    >
      {note}
    </div>
  );
};

export default ChordHeader;
