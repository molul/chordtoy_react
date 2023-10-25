// eslint-disable-next-line react/prop-types
const StopButton = ({ stopCurrentNotes }) => {
  return (
    <div
      className="bg-red-800 hover:bg-red-700 transition-colors p-2 w-full text-center rounded  cursor-pointer text-xs items-center flex justify-center uppercase font-bold  shadow-lg"
      onClick={() => stopCurrentNotes()}
    >
      Stop
    </div>
  );
};

export default StopButton;
