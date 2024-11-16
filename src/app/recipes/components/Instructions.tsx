import AddInstruction from "./AddInstruction";
import InstructionsList from "./InstructionsList";

export default function Instructions() {
  return (
    <div className="flex w-full flex-col rounded-md bg-white p-2">
      <h1 className="text-lg font-bold">Instructions:</h1>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <InstructionsList />
        <AddInstruction />
      </div>
    </div>
  );
}
