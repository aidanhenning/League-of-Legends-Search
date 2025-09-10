import MasteryCard from "./MasteryCard";

function MasteryList({ masteryData }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {masteryData.slice(0, 15).map((champion, idx) => (
        <MasteryCard key={idx} champion={champion} />
      ))}
    </div>
  );
}

export default MasteryList;
