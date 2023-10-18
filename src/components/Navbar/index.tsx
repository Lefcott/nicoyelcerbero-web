import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex h-16 md:ml-4 justify-center md:justify-start items-center flex-wrap gap-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" width={42} height={42} alt="Ácidamente" />
        <span>Ácidamente</span>
      </Link>
      <Link href="https://www.instagram.com/_acidamente/" target="_blank">
        <img
          src="/social-media-icons/instagram.png"
          alt="Ácidamente Instagram"
          className="w-6 h-6"
        ></img>
      </Link>
      <Link
        href="https://open.spotify.com/intl-es/artist/4nG31Ehhwr15bsXYf8GlRG?si=3q8SdxWyQSWdGsGtDh8Cvg"
        target="_blank"
      >
        <img
          src="/social-media-icons/spotify.webp"
          alt="Ácidamente Spotify"
          className="w-6 h-6"
        ></img>
      </Link>
      <Link href="https://www.youtube.com/@_acidamente" target="_blank">
        <img
          src="/social-media-icons/youtube.png"
          alt="Ácidamente YouTube"
          className="w-6 h-6"
        ></img>
      </Link>
      <Link href="mailto:acidamente.banda@gmail.com" target="_blank">
        <img
          src="/social-media-icons/gmail.ico"
          alt="Ácidamente Gmail"
          className="w-6 h-6"
        ></img>
      </Link>
    </div>
  );
}
