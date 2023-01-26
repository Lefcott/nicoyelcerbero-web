export default function TextInput({ onChange }) {
  return (
    <input
      type="text"
      className="text-black w-72 h-7 p-1 rounded-sm"
      onChange={onChange}
    />
  );
}
