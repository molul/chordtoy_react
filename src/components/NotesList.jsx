import * as Tone from "tone";

const synth = new Tone.MonoSynth({
  volume: -8,
  oscillator: {
    type: "triangle1",
  },
  envelope: {
    attack: 0.05,
    attackCurve: "linear",
    decay: 0,
    decayCurve: "exponential",
    sustain: 0.1,
    release: 10,
    releaseCurve: "exponential",
  },
  filter: {
    Q: 2,
    detune: 0,
    frequency: 0,
    gain: 0,
    rolloff: -12,
    type: "lowpass",
  },
  filterEnvelope: {
    attack: 0.001,
    attackCurve: "linear",
    decay: 0.1,
    decayCurve: "exponential",
    release: 0.2,
    releaseCurve: "exponential",
    sustain: 0.2,
    baseFrequency: 300,
    exponent: 2,
    octaves: 4,
  },
}).toDestination();

// const now = Tone.now();

const NotesList = ({ pianoNotes }) => {
  const playNote = (note) => {
    if (note) {
      synth.triggerAttackRelease(note, "1");
    }
  };

  let notesArray = [...Array(13).keys()].slice(1);

  return (
    <div className="flex flex-row gap-1 items-center justify-center w-full max-w-lg mx-auto">
      {/* Chords list */}
      {notesArray.map((note, index) => {
        return (
          <div
            key={index}
            className=" text-black shadow-lg w-full h-20 hover:bg-amber-200 transition-colors duration-200 cursor-pointer font-semibold "
            onClick={() => playNote(pianoNotes[index])}
          >
            <div
              className={`text-xs sm:text-sm md:text-base flex items-end  justify-center w-full h-full 
							${index < 3 && "bg-amber-400"}
							${index >= 3 && index < 6 && "bg-amber-300"}
							${index >= 6 && index < 9 && "bg-amber-400"}
							${index >= 9 && "bg-amber-300"}
							`}
            >
              {pianoNotes[index]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
