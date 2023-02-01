import ShowCard from "../ShowCard";

export default function ShowCards({ shows }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-8">Estas son nuestras próximas fechas:</h1>
      <div className="flex flex-wrap justify-center">
        {shows.map((show) => (
          <ShowCard key={show.date} show={show} />
        ))}
      </div>
    </div>
  );
}
