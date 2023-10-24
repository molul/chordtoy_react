import ChordList from "./ChordList";

const Layout = () => {
  return (
    // <div className="text-white flex flex-col justify-between min-h-screen bg-black bg-opacity-20 overflow-hidden">
    <div className="min-h-screen flex flex-col bg-zinc-800 p-4 w-full text-white">
      <ChordList />
    </div>
  );
};

export default Layout;
