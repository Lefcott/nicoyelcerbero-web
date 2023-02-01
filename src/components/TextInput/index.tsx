export default function TextInput({ onChange, value }) {
  return (
    <input
      type="text"
      className="text-black w-72 h-7 p-1 rounded-sm"
      onChange={onChange}
      value={value}
    />
  );
}
