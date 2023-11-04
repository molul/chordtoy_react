// eslint-disable-next-line react/prop-types
const ChordType = ({ type }) => {
  return (
    <div className="bg-zinc-600 text-white text-center rounded cursor-pointer text-sm lg:text-base px-1 lg:px-4 py-3 font-bold  shadow-lg">
      {type}
    </div>
  );
};

export default ChordType;
