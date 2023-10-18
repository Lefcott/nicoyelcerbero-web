import useNavigationButtonDetect from "@/hooks/useNavigationButtonDetect";
import { useShowStore } from "@/store/show";
import { useState } from "react";

export const LocationPhotos = () => {
  const show = useShowStore((state) => state);
  const [imageIndex, setImageIndex] = useState<number>(-1);
  const selectedImage = show.locationPhotos[imageIndex];

  const handleOpenImage = (index) => {
    setImageIndex(index);
    window.history.pushState({}, "");
  };

  useNavigationButtonDetect(() => setImageIndex(-1));

  return (
    <>
      <span>Fotos del lugar:</span>
      <div className="flex gap-2 mt-3">
        {show.locationPhotos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt="Foto de concierto"
            className="max-w-[calc(33%-5px)] md:max-w-[250px] h-auto rounded-md shadow-[0px_2px_40px_1px_black] cursor-pointer duration-300 hover:scale-105"
            onClick={() => handleOpenImage(i)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="z-10">
          <div className="fixed left-0 top-0 w-full h-full backdrop-blur-md flex justify-center items-center">
            <img
              src={selectedImage}
              alt="Foto de concierto"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="fixed right-0 top-0 mt-8 mr-8 text-4xl select-none cursor-pointer"
            onClick={() => setImageIndex(-1)}
          >
            ✖
          </div>
          {imageIndex < show.locationPhotos.length - 1 && (
            <div
              className="fixed right-0 top-[50vh] translate-y-[-50%] mr-8 text-4xl select-none cursor-pointer"
              onClick={() => setImageIndex(imageIndex + 1)}
            >
              ➜
            </div>
          )}
          {imageIndex > 0 && (
            <div
              className="fixed left-0 top-[50vh] translate-y-[-50%] rotate-180 ml-8 text-4xl select-none cursor-pointer"
              onClick={() => setImageIndex(imageIndex - 1)}
            >
              ➜
            </div>
          )}
        </div>
      )}
    </>
  );
};
