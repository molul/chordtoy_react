// eslint-disable-next-line react/prop-types
const ChordType = ({ type }) => {
  return (
    <div className="border-2 border-zinc-700 text-zinc-700 text-center rounded cursor-pointer text-sm md:text-base px-1 lg:px-4 py-1.5 font-bold">
      {type}
    </div>
  );
};

export default ChordType;
