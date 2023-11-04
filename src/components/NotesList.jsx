import { useState } from "react";

import * as Tone from "tone";
import { calculateChord } from "../lib/getChords";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();

const NotesList = () => {
  // const [octave, setOctave] = useState("4");
  const octave = 3;
  const [currentTones, setCurrentTones] = useState([]);

  const stopCurrentNotes = () => {
    synth.triggerRelease(currentTones, now);
  };

  //play a middle 'C' for the duration of an 8th note
  const play = (chordNote, chordType) => {
    stopCurrentNotes();

    const chordToPlay = calculateChord(octave, chordNote, chordType);

    setCurrentTones(chordToPlay);

    setTimeout(() => {
      chordToPlay.map((note) => {
        synth.triggerAttack(note, now);
      });
    }, 1);
  };

  const playNote = (note) => {
    stopCurrentNotes();
    setCurrentTones([note + octave]);

    setTimeout(() => {
      synth.triggerAttack([note + octave], now);
    }, 1);
  };
  let notesArray = [...Array(12).keys()].slice(1);

  return (
    <div className="flex flex-row gap-1 items-center justify-center w-full max-w-lg mx-auto">
      {/* Chords list */}
      {notesArray.map((note, index) => {
        console.log("qwe");
        return (
          <div
            key={index}
            className="bg-amber-300 w-full h-20 hover:bg-amber-200 transition-colors duration-200 cursor-pointer"
          >
            {" "}
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
