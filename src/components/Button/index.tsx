import Link from "next/link";
import Spinner from "../Spinner";

export default function Button({
  children,
  isLink = false,
  href = "",
  onClick = (e) => {},
  disabled = false,
  loading = false,
}) {
  const handleClick = (e) => {
    if (!disabled) {
      onClick(e);
    }
  };

  return (
    <div className="flex space-x-5">
      <div
        className="w-fit px-3 h-10 bg-green-600 rounded-md cursor-pointer select-none"
        style={{
          ...(disabled
            ? {
                opacity: 0.3,
                cursor: "unset",
              }
            : {}),
        }}
        onClick={handleClick}
      >
        {isLink ? (
          <Link
            href={href}
            className="w-full h-full flex justify-center items-center space-x-2"
          >
            {children}
          </Link>
        ) : (
          <div className="w-full h-full flex justify-center items-center space-x-2">
            {children}
          </div>
        )}
      </div>
      {loading && <Spinner />}
    </div>
  );
}
