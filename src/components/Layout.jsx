import ChordsGrid from "./ChordsGrid";

const Layout = () => {
  return (
    // <div className="text-white flex flex-col justify-between min-h-screen bg-black bg-opacity-20 overflow-hidden">
    <div className="min-h-screen flex flex-col bg-zinc-600 p-2 w-full text-white">
      <ChordsGrid />
    </div>
  );
};

export default Layout;
