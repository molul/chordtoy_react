import ChordsGrid from "./ChordsGrid";
import NotesList from "./NotesList";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [pianoNotes, setPianoNotes] = useState([]);

  return (
    <div className="font-cartoon min-h-screen flex flex-col bg-zinc-200 w-full text-white ">
      <Header />
      <div className="p-2 space-y-2 flex-1">
        <ChordsGrid setPianoNotes={setPianoNotes} />
        <NotesList pianoNotes={pianoNotes} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
