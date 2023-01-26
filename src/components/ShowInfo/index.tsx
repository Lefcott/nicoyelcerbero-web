import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faTicket,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ShowInfo({ show }) {
  return (
    <>
      <div className="flex items-center space-x-4 mb-4">
        <FontAwesomeIcon icon={faCalendarDay} />
        <h1 className="text-4xl">{show.date}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faLocationDot} />
        <span className="text-lg pl-2">
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
      {show.onlyAdults && (
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faUser} />
          <span className="text-base pl-[6px]">Evento para mayores de 18 años</span>
        </div>
      )}
    </>
  );
}
