export default function TextInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="text-black w-72 h-7 p-1 rounded-sm"
      value={value}
      onChange={onChange}
    />
  );
}
