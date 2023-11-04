// eslint-disable-next-line react/prop-types
const StopButton = ({ stopCurrentNotes }) => {
  return (
    <div
      className="bg-mainMagenta hover:bg-mainMagentaLight transition-colors duration-300 p-2 w-full text-center rounded  cursor-pointer text-sm md:text-base items-center flex justify-center uppercase font-bold  shadow-lg"
      onClick={() => stopCurrentNotes()}
    >
      Stop
    </div>
  );
};

export default StopButton;
