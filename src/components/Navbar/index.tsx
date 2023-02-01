import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex h-16 justify-center md:justify-start">
      <Link href="/" className="flex items-center space-x-2 ml-4">
        <Image
          src="/logo.png"
          width={42}
          height={42}
          alt="Logo Nico y El Cerbero"
        />
        <span>Nico y El Cerbero</span>
      </Link>
    </div>
  );
}
