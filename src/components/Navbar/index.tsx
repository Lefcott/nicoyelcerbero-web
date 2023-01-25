import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex h-14 bg-slate-100">
      <div className="flex items-center space-x-2 ml-2">
        <Image
          src="/logo.png"
          width={42}
          height={42}
          alt="Logo Nico y El Cerbero"
        />
        <span>Nico y El Cerbero</span>
      </div>
    </div>
  );
}
