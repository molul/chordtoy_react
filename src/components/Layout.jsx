import ChordsGrid from "./ChordsGrid";
import NotesList from "./NotesList";

const Layout = () => {
  return (
    // <div className="text-white flex flex-col justify-between min-h-screen bg-black bg-opacity-20 overflow-hidden">
    <div className="min-h-screen flex flex-col bg-zinc-600 p-2 w-full text-white space-y-2">
      <ChordsGrid />
      <NotesList />
    </div>
  );
};

export default Layout;
