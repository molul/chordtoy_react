import React from "react";
import { notes } from "../../data/notes";
import { chordTypes } from "../../data/chordTypes";
import ChordButton from "./ChordButton";
import ChordNoteButton from "./ChordNoteButton";

const ChordsButtons = ({ playNote, playChord }) => {
  return (
    <div className="space-y-1 w-full">
      {notes.map((note, index) => {
        return (
          <div key={index} className="grid grid-cols-6 gap-1">
            <ChordNoteButton note={note} playNote={playNote} />

            {chordTypes.map((chordType, index2) => {
              return (
                <div key={`${index}-${index2}`}>
                  <ChordButton
                    chordNote={note}
                    chordType={chordType}
                    playFunc={playChord}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChordsButtons;
