import shows from "../../data/shows.json";
import ShowCard from "../ShowCard";

export default function ShowCards() {
  return (
    <div>
      {shows.map((show) => (
        <ShowCard key={show.date} show={show} />
      ))}
    </div>
  );
}
