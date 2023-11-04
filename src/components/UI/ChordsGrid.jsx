import { useState, useContext } from "react";
import { OptionsContext } from "../../contexts/OptionsContext";

import * as Tone from "tone";

import { calculateChord, getPianoNotes } from "../../lib/getChords";

import ChordsGridTopRow from "./ChordsGridTopRow";
import ChordsButtons from "./ChordsButtons";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
synth.volume.value = -5;
const now = Tone.now();

const ChordsGrid = ({ setPianoNotes }) => {
  const { options, setOptions } = useContext(OptionsContext);

  const [currentTones, setCurrentTones] = useState([]);

  const stopCurrentNotes = () => {
    synth.triggerRelease(currentTones, now);
  };

  const playChord = (chordNote, chordType) => {
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
    <div className="flex flex-col gap-1 items-center justify-center w-full h-full max-w-lg mx-auto text-sm md:text-lg ">
      {/* StopButton and chord types list */}
      <ChordsGridTopRow stopCurrentNotes={stopCurrentNotes} />

      {/* Chords list */}
      <ChordsButtons playNote={playNote} playChord={playChord} />
    </div>
  );
};

export default ChordsGrid;
