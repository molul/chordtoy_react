import ChordsGrid from "../UI/ChordsGrid";
import NotesList from "../UI/NotesList";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { OptionsProvider } from "../../contexts/OptionsContext";
import NoteLeft from "./NoteLeft";
import NoteRight from "./NoteRight";

const Layout = () => {
  const [pianoNotes, setPianoNotes] = useState([]);

  return (
    <OptionsProvider>
      <div className="font-cartoon min-h-screen flex flex-col bg-zinc-100 w-full text-white ">
        <Header />

        <div className=" py-4 flex-1 h-full ">
          <NoteLeft />

          <div className="z-10 relative">
            <div className="w-full max-w-lg  backdrop-blur-sm space-y-2 flex flex-col items-center justify-center mx-auto bg-zinc-50 p-2 rounded-lg bg-opacity-70 shadow-lg h-full ">
              <ChordsGrid setPianoNotes={setPianoNotes} />
              <NotesList pianoNotes={pianoNotes} />
            </div>
          </div>

          <NoteRight />
        </div>

        <Footer />
      </div>
    </OptionsProvider>
  );
};

export default Layout;
