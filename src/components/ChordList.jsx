import { useState } from "react";

import * as Tone from "tone";
import Chord from "./Chord";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now();
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const chordTypes = ["maj", "maj7", "m", "m7"];

const ChordList = () => {
  const [currentTones, setCurrentTones] = useState([]);

  const stopCurrentNotes = () => {
    synth.triggerRelease(currentTones, now);
  };

  //play a middle 'C' for the duration of an 8th note
  const play = (chordNote, chordType) => {
    stopCurrentNotes();
    // calculateChord(chordNote, chordType);
    const chordToPlay = calculateChord(chordNote, chordType);
    // const chordToPlay = chords[chordNote][chordType];

    setCurrentTones(chordToPlay);

    setTimeout(() => {
      chordToPlay.map((note) => {
        synth.triggerAttack(note, now);
      });
    }, 1);
  };

  const playNote = (note) => {
    stopCurrentNotes();
    setCurrentTones([note + "4"]);

    setTimeout(() => {
      synth.triggerAttack([note + "4"], now);
    }, 1);
  };

  const getRelativeNote = (note, semitones, baseOctave) => {
    let relNoteIndex = notes.indexOf(note) + semitones;
    let relNoteOctave = baseOctave;
    if (relNoteIndex >= notes.length) {
      relNoteIndex -= notes.length;
      relNoteOctave = baseOctave + 1;
    }
    const relNote = notes[relNoteIndex];
    return { index: relNoteIndex, note: relNote, octave: relNoteOctave };
  };

  const calculateChord = (note, chordType) => {
    const baseOctave = 4;
    // console.log("BASE OCTAVE: " + baseOctave);
    // console.log("NOTE: " + note + baseOctave);
    const notes = [note + baseOctave.toString()];
    if (chordType === "maj") {
      let relNote1 = getRelativeNote(note, 4, baseOctave);
      let relNote2 = getRelativeNote(note, 7, baseOctave);
      notes.push(
        relNote1.note + relNote1.octave,
        relNote2.note + relNote2.octave
      );
    }
    if (chordType === "maj7") {
      let relNote1 = getRelativeNote(note, 4, baseOctave);
      let relNote2 = getRelativeNote(note, 7, baseOctave);
      let relNote3 = getRelativeNote(note, 11, baseOctave);
      notes.push(
        relNote1.note + relNote1.octave,
        relNote2.note + relNote2.octave,
        relNote3.note + relNote3.octave
      );
    }
    if (chordType === "m") {
      let relNote1 = getRelativeNote(note, 3, baseOctave);
      let relNote2 = getRelativeNote(note, 7, baseOctave);
      notes.push(
        relNote1.note + relNote1.octave,
        relNote2.note + relNote2.octave
      );
    }
    if (chordType === "m7") {
      let relNote1 = getRelativeNote(note, 3, baseOctave);
      let relNote2 = getRelativeNote(note, 7, baseOctave);
      let relNote3 = getRelativeNote(note, 10, baseOctave);
      notes.push(
        relNote1.note + relNote1.octave,
        relNote2.note + relNote2.octave,
        relNote3.note + relNote3.octave
      );
    }

    return notes;
  };

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

      {notes.map((chordNote, index) => {
        return (
          <div key={index} className="flex flex-row gap-2 items-center">
            <div
              className=" bg-zinc-700 hover:bg-zinc-600 transition-colors text-center rounded cursor-pointer text-xs lg:text-base w-14 lg:w-20 px-2 lg:px-4 py-4 font-bold"
              onClick={() => playNote(chordNote)}
            >
              {chordNote}
            </div>
            {chordTypes.map((chordType, index2) => {
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
