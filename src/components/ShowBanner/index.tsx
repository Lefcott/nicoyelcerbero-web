import Image from "next/image";

export default function ShowBanner({ show }) {
  return (
    <>
      <Image
        src={show.bannerUrl}
        className="rounded-md"
        width={1000}
        height={1000}
        alt={`Banner ${show.date}`}
      />
    </>
  );
}
