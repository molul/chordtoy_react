import { useState } from "react";

import * as Tone from "tone";
import { chords } from "../data/chords";
import Chord from "./Chord";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();

const ChordList = () => {
  const [currentTones, setCurrentTones] = useState([]);

  const stopCurrentNotes = () => {
    synth.triggerRelease(currentTones, now);
  };

  //play a middle 'C' for the duration of an 8th note
  const play = (chordNote, chord) => {
    stopCurrentNotes();
    const chordToPlay = chords[chordNote][chord];

    setCurrentTones(chordToPlay);

    setTimeout(() => {
      chordToPlay.map((note) => {
        synth.triggerAttack(note, now);
      });
    }, 1);
  };

  const chordTypes = ["maj", "m"];

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="w-16 p-4 rounded text-center">Note</div>
        {chordTypes.map((chordType, index) => (
          <div key={index} className="w-20 text-center font-bold">
            {chordType}
          </div>
        ))}
      </div>

      {Object.keys(chords).map((chordNote, index) => {
        return (
          <div key={index} className="flex flex-row gap-4 items-center">
            <div className="w-16 border border-white p-4 rounded text-center">
              {chordNote}
            </div>
            {Object.keys(chords[chordNote]).map((chord, index2) => {
              return (
                <div key={`${index}-${index2}`}>
                  <Chord chordNote={chordNote} chord={chord} playFunc={play} />
                </div>
              );
            })}
          </div>
        );
      })}
      <div
        className="bg-sky-700 p-4 w-full text-center rounded  cursor-pointer"
        onClick={() => stopCurrentNotes()}
      >
        Stop
      </div>
    </div>
  );
};

export default ChordList;
