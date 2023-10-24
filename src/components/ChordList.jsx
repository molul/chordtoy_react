import { useState } from "react";

import * as Tone from "tone";
import { chords } from "../data/chords";
import Chord from "./Chord";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const ChordList = () => {
  const [currentTones, setCurrentTones] = useState([]);

  const stopCurrentNotes = () => {
    synth.triggerRelease(currentTones, now);
  };

  //play a middle 'C' for the duration of an 8th note
  const play = (chordNote, chordType) => {
    stopCurrentNotes();
    calculateChord(chordNote, chordType);
    const chordToPlay = chords[chordNote][chordType];

    setCurrentTones(chordToPlay);

    setTimeout(() => {
      chordToPlay.map((note) => {
        synth.triggerAttack(note, now);
      });
    }, 1);
  };

  const getRelativeNote = (note, semitones) => {
    let relNoteIndex = notes.indexOf(note) + semitones;
    if (relNoteIndex > notes.length) {
      relNoteIndex -= notes.length;
    }

    // console.log("REL NOTE INDEX: " + relNoteIndex);
    // console.log("REL NOTE: " + notes[relNoteIndex]);
    const relNote = notes[relNoteIndex];
    return { index: relNoteIndex, note: relNote };
  };

  const calculateChord = (note, chordType) => {
    const noteIndex = notes.indexOf(note);
    const baseOctave = noteIndex <= 2 ? 4 : 5;
    console.log("BASE OCTAVE: " + baseOctave);
    console.log("NOTE INDEX: " + noteIndex);
    if (chordType === "maj") {
      let relNote = getRelativeNote(note, 4);
      console.log(relNote.index);
      console.log(relNote.note);
    }
    return note;
  };

  const chordTypes = ["maj", "maj7", "m", "m7"];

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-row gap-2 items-center justify-center">
        <div className="text-center rounded cursor-pointer text-sm lg:text-base w-14 lg:w-20 px-2 lg:px-4 word-wrap">
          Note / Chord
        </div>
        {chordTypes.map((chordType, index) => (
          <div
            key={index}
            className="bg-zinc-700 text-center rounded cursor-pointer text-sm lg:text-base w-14 lg:w-20 px-2 lg:px-4 py-4"
          >
            {chordType}
          </div>
        ))}
      </div>

      {Object.keys(chords).map((chordNote, index) => {
        return (
          <div key={index} className="flex flex-row gap-2 items-center">
            <div className=" bg-zinc-700 text-center rounded cursor-pointer text-xs lg:text-base w-14 lg:w-20 px-2 lg:px-4 py-4 font-bold">
              {chordNote}
            </div>
            {Object.keys(chords[chordNote]).map((chordType, index2) => {
              return (
                <div key={`${index}-${index2}`}>
                  <Chord
                    chordNote={chordNote}
                    chordType={chordType}
                    playFunc={play}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
      <div
        className="bg-sky-700 hover:bg-sky-600 transition-colors p-4 w-full text-center rounded  cursor-pointer"
        onClick={() => stopCurrentNotes()}
      >
        Stop
      </div>
    </div>
  );
};

export default ChordList;
