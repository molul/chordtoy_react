import { notes } from "../data/notes";

//--------------------------------------------------------
// calculateChord
//--------------------------------------------------------
export const calculateChord = (octave, note, chordType) => {
  const notes = [note + octave.toString()];

  let relNote1 = null;
  let relNote2 = null;
  let relNote3 = null;

  switch (chordType) {
    case "maj":
      relNote1 = getRelativeNote(note, 4, octave);
      relNote2 = getRelativeNote(note, 7, octave);
      break;
    case "maj7":
      relNote1 = getRelativeNote(note, 4, octave);
      relNote2 = getRelativeNote(note, 7, octave);
      relNote3 = getRelativeNote(note, 11, octave);
      break;
    case "7":
      relNote1 = getRelativeNote(note, 4, octave);
      relNote2 = getRelativeNote(note, 7, octave);
      relNote3 = getRelativeNote(note, 10, octave);
      break;
    case "m":
      relNote1 = getRelativeNote(note, 3, octave);
      relNote2 = getRelativeNote(note, 7, octave);
      break;
    case "m7":
      relNote1 = getRelativeNote(note, 3, octave);
      relNote2 = getRelativeNote(note, 7, octave);
      relNote3 = getRelativeNote(note, 10, octave);
      break;
    default:
      break;
  }

  notes.push(relNote1.note + relNote1.octave, relNote2.note + relNote2.octave);
  if (relNote3) notes.push(relNote3.note + relNote3.octave);

  return notes;
};

//--------------------------------------------------------
// getPianoNotes
//--------------------------------------------------------
export const getPianoNotes = (note, chordType) => {
  const notes = [];
  let relNote1 = "";
  let relNote2 = "";

  for (let i = 0; i < 4; i++) {
    const octave = i + 4;
    switch (chordType) {
      case "maj":
        relNote1 = getRelativeNote(note, 4, octave);
        relNote2 = getRelativeNote(note, 7, octave);
        break;
      case "maj7":
        relNote1 = getRelativeNote(note, 4, octave);
        relNote2 = getRelativeNote(note, 11, octave);
        break;
      case "7":
        relNote1 = getRelativeNote(note, 4, octave);
        relNote2 = getRelativeNote(note, 10, octave);
        break;
      case "m":
        relNote1 = getRelativeNote(note, 3, octave);
        relNote2 = getRelativeNote(note, 7, octave);
        break;
      case "m7":
        relNote1 = getRelativeNote(note, 3, octave);
        relNote2 = getRelativeNote(note, 10, octave);
        break;
      default:
        break;
    }

    notes.push(
      note + octave.toString(),
      relNote1.note + relNote1.octave,
      relNote2.note + relNote2.octave
    );
  }

  return notes;
};

//--------------------------------------------------------
// getRelativeNote
//--------------------------------------------------------
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
