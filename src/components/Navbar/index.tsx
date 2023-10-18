import { createEvent } from "@/services/api/events";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex h-16 md:pl-4 justify-center md:justify-start items-center flex-wrap gap-4">
      <Link
        href="/"
        className="flex items-center space-x-2"
        onClick={() => createEvent("HomePageClicked")}
      >
        <Image src="/logo.png" width={42} height={42} alt="Ácidamente" />
        <span>Ácidamente</span>
      </Link>
      <Link
        href="https://linktw.in/JWwDQW"
        target="_blank"
        onClick={() => createEvent("InstagramLinkClicked")}
      >
        <img
          src="/social-media-icons/instagram.png"
          alt="Ácidamente Instagram"
          className="w-6 h-6"
        ></img>
      </Link>
      <Link
        href="https://linktw.in/bXiYeN"
        target="_blank"
        onClick={() => createEvent("SpotifyLinkClicked")}
      >
        <img
          src="/social-media-icons/spotify.webp"
          alt="Ácidamente Spotify"
          className="w-6 h-6"
        ></img>
      </Link>
      <Link
        href="https://linktw.in/JShdAO"
        target="_blank"
        onClick={() => createEvent("YouTubeLinkClicked")}
      >
        <img
          src="/social-media-icons/youtube.png"
          alt="Ácidamente YouTube"
          className="w-6 h-6"
        ></img>
      </Link>
      <Link
        href="https://wa.link/hmh0xp"
        target="_blank"
        onClick={() => createEvent("WhatsAppLinkClicked")}
      >
        <img
          src="/social-media-icons/whatsapp.webp"
          alt="Ácidamente WhatsApp"
          className="w-6 h-6"
        ></img>
      </Link>
    </div>
  );
}
