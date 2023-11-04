import { useState } from "react";

import * as Tone from "tone";
import Chord from "./Chord";
import { chordTypes } from "../data/chordTypes";
import { notes } from "../data/notes";
import { calculateChord, getPianoNotes } from "../lib/getChords";
import ChordHeader from "./ChordHeader";
import ChordType from "./ChordType";
import StopButton from "./StopButton";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
synth.volume.value = -5;
const now = Tone.now();

const ChordsGrid = ({ setPianoNotes }) => {
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

    setPianoNotes(getPianoNotes(chordNote, chordType));

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

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full max-w-lg mx-auto">
      {/* StopButton and chord types list */}
      <div className="w-full">
        <div className="grid grid-cols-6 gap-2">
          <StopButton stopCurrentNotes={stopCurrentNotes} />

          {chordTypes.map((chordType, index) => (
            <div key={index}>
              <ChordType type={chordType} />
            </div>
          ))}
        </div>
      </div>

      {/* Chords list */}
      <div className="space-y-2 w-full">
        {notes.map((note, index) => {
          return (
            <div key={index} className="grid grid-cols-6 gap-2">
              <ChordHeader note={note} playNote={playNote} />

              {chordTypes.map((chordType, index2) => {
                return (
                  <div key={`${index}-${index2}`}>
                    <Chord
                      chordNote={note}
                      chordType={chordType}
                      playFunc={play}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChordsGrid;
