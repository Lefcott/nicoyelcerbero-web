import { useShowStore } from "@/store/show";
import Image from "next/image";

export const LocationPhotos = () => {
  const show = useShowStore((state) => state);

  return (
    <>
      <span>Fotos del lugar:</span>
      <div className="flex gap-2 mt-3">
        {show.locationPhotos.map((photo) => (
          <>
            <img
              src={photo}
              alt="Foto de concierto"
              className="max-w-[calc(33%-5px)] md:max-w-[250px] h-auto rounded-md shadow-[0px_2px_40px_1px_black]"
            />
          </>
        ))}
      </div>
    </>
  );
};
