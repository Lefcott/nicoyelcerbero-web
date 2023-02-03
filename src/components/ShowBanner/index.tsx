import { useShowStore } from "@/store/show";
import Image from "next/image";

export default function ShowBanner() {
  const show = useShowStore((state) => state);

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
