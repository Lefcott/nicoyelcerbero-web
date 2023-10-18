import { useShowStore } from "@/store/show";
import { getThumbnailUrl } from "@/utils/getThumbnail";
import Link from "next/link";

export const PreviousShows = () => {
  const show = useShowStore((state) => state);

  return (
    <div id="videos-de-shows-anteriores" className="flex flex-col items-center">
      <h2 className="text-2xl pt-5">Videos de shows anteriores</h2>
      <div className="flex justify-center md:justify-start md:px-52 mt-4 flex-wrap gap-x-3 gap-y-10 flex-[1_1_30%]">
        {show.previousShows.map((previousShow) => (
          <>
            <Link
              href={previousShow.linkTwUrl || previousShow.videoUrl}
              target="_blank"
              className="relative w-36 h-[81px] md:w-48 md:h-[108px] duration-300 hover:scale-105" // h = w * 0.5625068060546663
            >
              <img
                src={getThumbnailUrl(previousShow.videoUrl)}
                alt={previousShow.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/social-media-icons/youtube.png"
                  alt="YouTube Logo"
                  className="w-10 h-10 object-cover ml-2"
                />
              </div>{" "}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-[10px] md:text-xs text-center p-1">
                {previousShow.title}
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};
