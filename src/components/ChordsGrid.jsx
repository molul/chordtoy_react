import { useState, useContext } from "react";

import { chordTypes } from "../data/chordTypes";
import { notes } from "../data/notes";
import * as Tone from "tone";
import { calculateChord, getPianoNotes } from "../lib/getChords";
import Chord from "./Chord";
import ChordHeader from "./ChordHeader";
import ChordType from "./ChordType";
import StopButton from "./StopButton";
import { OptionsContext } from "../contexts/OptionsContext";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
synth.volume.value = -5;
const now = Tone.now();

const ChordsGrid = ({ setPianoNotes }) => {
  const { options, setOptions } = useContext(OptionsContext);

  const [currentTones, setCurrentTones] = useState([]);

  const stopCurrentNotes = () => {
    synth.triggerRelease(currentTones, now);
  };

  //play a middle 'C' for the duration of an 8th note
  const play = (chordNote, chordType) => {
    stopCurrentNotes();

    const chordToPlay = calculateChord(options.octave, chordNote, chordType);

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
    setCurrentTones([note + options.octave]);

    setTimeout(() => {
      synth.triggerAttack([note + options.octave], now);
    }, 1);
  };

  return (
    <div className="flex flex-col gap-1 items-center justify-center w-full h-full max-w-lg mx-auto">
      {/* StopButton and chord types list */}
      <div className="w-full">
        <div className="grid grid-cols-6 gap-1">
          <StopButton stopCurrentNotes={stopCurrentNotes} />

          {chordTypes.map((chordType, index) => (
            <div key={index}>
              <ChordType type={chordType} />
            </div>
          ))}
        </div>
      </div>

      {/* Chords list */}
      <div className="space-y-1 w-full">
        {notes.map((note, index) => {
          return (
            <div key={index} className="grid grid-cols-6 gap-1">
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
