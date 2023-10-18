import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faTicket,
  faLocationDot,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useShowStore } from "@/store/show";
import { LocationPhotos } from "./LocationPhotos";
import { cleanPath } from "@/utils/cleanPath";

export default function ShowInfo() {
  const show = useShowStore((state) => state);

  return (
    <>
      <div className="flex items-center space-x-4 mb-4">
        <FontAwesomeIcon icon={faCalendarDay} />
        <h1 className="text-2xl pl-1">{show.date}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faLocationDot} />
        <span className="text-base pl-2">
          {show.locationName} (
          <Link href={show.addressUrl} target="_blank">
            <span className="text-teal-400">{show.address}</span>
          </Link>
          )
        </span>
      </div>
      {show.isFree && (
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faTicket} />
          <span className="text-base pl-[2px]">Entrada gratis</span>
        </div>
      )}
      {!show.isFree && show.presalePrice && (
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faTicket} />
          <span className="text-base pl-[2px]">
            Entrada anticipada: $ {show.presalePrice}
          </span>
        </div>
      )}
      {!show.isFree && show.indoorPrice && (
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faTicket} />
          <span className="text-base pl-[2px]">
            Entrada en puerta: $ {show.indoorPrice}
          </span>
        </div>
      )}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faUser} />
        <span className="text-base pl-[6px]">
          {show.onlyAdults
            ? "Evento para mayores de 18 años"
            : "Evento apto para todo público"}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faVideo} />
        <Link
          href="#videos-de-shows-anteriores"
          className="text-base pl-[2.5px] text-teal-400"
          onClick={cleanPath}
        >
          Ver videos de nuestros shows anteriores
        </Link>
      </div>
      <div className="mt-3">
        <LocationPhotos />
      </div>
    </>
  );
}
