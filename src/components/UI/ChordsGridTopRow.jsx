import StopButton from "./StopButton";
import ChordType from "./ChordType";
import { chordTypes } from "../../data/chordTypes";

const ChordsGridTopRow = ({ stopCurrentNotes }) => {
  return (
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
  );
};

export default ChordsGridTopRow;
