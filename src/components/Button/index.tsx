export default function Button({ children }) {
  return (
    <div className="flex justify-center items-center w-36 h-10 bg-green-600 rounded-md cursor-pointer">
      {children}
    </div>
  );
}
