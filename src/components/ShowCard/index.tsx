import Image from "next/image";
import Link from "next/link";

export default function ShowCard({ show }) {
  return (
    <Link
      href={`/${show.key}`}
      className="w-[280px] h-[487px] rounded-md shadow-2xl shadow-gray-500/50 relative m-2 duration-500 hover:scale-105"
    >
      <Image
        src={show.flyerUrl}
        fill
        className="rounded-md"
        alt={`Ácidamente - ${show.date}`}
      />
    </Link>
  );
}
