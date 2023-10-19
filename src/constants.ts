import { v4 as uuid } from "uuid";

const isDev = process.env.NODE_ENV === "development";

export const pageVisitId = `${isDev ? "dev-" : ""}${uuid()}`;
export const fromAd =
  typeof window === "object" &&
  new URLSearchParams(window.location.search).get("fromAd") === "true";
