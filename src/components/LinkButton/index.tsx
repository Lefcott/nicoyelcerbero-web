import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <div className="w-36 h-10 bg-green-600 rounded-md cursor-pointer">
      <Link
        href={href}
        className="w-full h-full flex justify-center items-center"
      >
        {children}
      </Link>
    </div>
  );
}
