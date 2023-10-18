import { GuestInterface } from "./guest";

export interface ShowInterface {
  _id: string;
  key: string;
  active: boolean;
  flyerUrl: string;
  bannerUrl: string;
  date: string;
  isFree: boolean;
  presalePrice?: number;
  indoorPrice?: number;
  locationName: string;
  address: string;
  addressUrl: string;
  onlyAdults: boolean;
  locationPhotos: string[];
  previousShows: { videoUrl: string; title: string; linkTwUrl?: string }[];
  guests: GuestInterface[];
  feePayer: "buyer" | "seller" | "both";
}
