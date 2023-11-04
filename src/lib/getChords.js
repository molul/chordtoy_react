import { notes } from "../data/notes";

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

export const calculateChord = (octave, note, chordType) => {
  // const baseOctave = 3;
  // console.log("BASE OCTAVE: " + baseOctave);
  // console.log("NOTE: " + note + baseOctave);
  const notes = [note + octave.toString()];
  if (chordType === "maj") {
    let relNote1 = getRelativeNote(note, 4, octave);
    let relNote2 = getRelativeNote(note, 7, octave);
    notes.push(
      relNote1.note + relNote1.octave,
      relNote2.note + relNote2.octave
    );
  }
  if (chordType === "maj7") {
    let relNote1 = getRelativeNote(note, 4, octave);
    let relNote2 = getRelativeNote(note, 7, octave);
    let relNote3 = getRelativeNote(note, 11, octave);
    notes.push(
      relNote1.note + relNote1.octave,
      relNote2.note + relNote2.octave,
      relNote3.note + relNote3.octave
    );
  }
  if (chordType === "7") {
    let relNote1 = getRelativeNote(note, 4, octave);
    let relNote2 = getRelativeNote(note, 7, octave);
    let relNote3 = getRelativeNote(note, 10, octave);
    notes.push(
      relNote1.note + relNote1.octave,
      relNote2.note + relNote2.octave,
      relNote3.note + relNote3.octave
    );
  }
  if (chordType === "m") {
    let relNote1 = getRelativeNote(note, 3, octave);
    let relNote2 = getRelativeNote(note, 7, octave);
    notes.push(
      relNote1.note + relNote1.octave,
      relNote2.note + relNote2.octave
    );
  }
  if (chordType === "m7") {
    let relNote1 = getRelativeNote(note, 3, octave);
    let relNote2 = getRelativeNote(note, 7, octave);
    let relNote3 = getRelativeNote(note, 10, octave);
    notes.push(
      relNote1.note + relNote1.octave,
      relNote2.note + relNote2.octave,
      relNote3.note + relNote3.octave
    );
  }

  return notes;
};
