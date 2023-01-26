import fecha1 from "../../public/flyers/fecha1.png";
import fecha2 from "../../public/flyers/fecha2.jpeg";
import fecha3 from "../../public/flyers/fecha3.jpeg";
import fecha4 from "../../public/flyers/fecha4.png";
import banner from "../../public/banner.jpg";

const SHOWS = [
  {
    key: "viernes-18-de-noviembre-de-2022-a-las-20-30-hs",
    flyerUrl: fecha1,
    bannerUrl: banner,
    date: "Viernes 18 de noviembre de 2022 a las 20:30 hs",
    isFree: true,
    presalePrice: null,
    indoorPrice: null,
    locationName: "El Emergente Bar",
    address: "Gallo 333",
    addressUrl: "https://goo.gl/maps/Vfm2RMjK9pvGqMJr7",
    onlyAdults: true,
  },
  {
    key: "viernes-2-de-diciembre-de-2022-a-las-20-30-hs",
    flyerUrl: fecha2,
    bannerUrl: banner,
    date: "Viernes 2 de diciembre de 2022 a las 20:00 hs",
    isFree: false,
    presalePrice: 700,
    indoorPrice: 1000,
    locationName: "Moscú Fest",
    address: "Av. Córdoba 4335",
    addressUrl: "https://goo.gl/maps/7V1LgHEzGNLXMQGq5",
    onlyAdults: false,
  },
  {
    key: "sabado-3-de-diciembre-de-2022-a-las-20-30-hs",
    flyerUrl: fecha3,
    bannerUrl: banner,
    date: "Sábado 3 de diciembre de 2022 a las 20:00 hs",
    isFree: true,
    presalePrice: null,
    indoorPrice: null,
    locationName: "Centro Cultural Musicleta",
    address: "Aguirre 489",
    addressUrl: "https://goo.gl/maps/XmK1bJtFN51YLZu98",
    onlyAdults: false,
  },
  {
    key: "viernes-20-de-enero-de-2022-a-las-20-30-hs",
    flyerUrl: fecha4,
    bannerUrl: banner,
    date: "Viernes 20 de enero de 2022 a las 20:30 hs",
    isFree: false,
    presalePrice: 750,
    indoorPrice: 1000,
    locationName: "Santos Bar",
    address: "Cnel. Niceto Vega 5924",
    addressUrl: "https://goo.gl/maps/1z5LdifqMenYpzsr6",
    onlyAdults: true,
  },
];

export default SHOWS;
