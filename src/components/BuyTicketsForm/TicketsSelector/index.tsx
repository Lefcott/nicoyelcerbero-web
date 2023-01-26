export default function TicketSelector({ value, onChange }) {
  return (
    <select
      className="text-black w-12 h-7 text-center rounded-sm"
      value={value}
      onChange={onChange}
    >
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
    </select>
  );
}
