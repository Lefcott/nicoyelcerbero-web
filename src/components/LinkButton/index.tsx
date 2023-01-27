import Link from "next/link";
export default function Button({
  children,
  isLink = false,
  href = "",
  onClick,
}) {
  return (
    <div
      className="w-fit px-3 h-10 bg-green-600 rounded-md cursor-pointer"
      onClick={onClick}
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
  );
}
