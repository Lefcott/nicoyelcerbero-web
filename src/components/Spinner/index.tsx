export default function Spinner() {
  return (
    <div className="spinner relative flex items-center">
      <div className="w-8 h-8 border border-gray-400 border-t-2 border-r-2 rounded-full animate-spin transform rotate-45 animation-spin duration-1000 ease-linear infinite" />
    </div>
  );
}
