import axios from "../../utils/axios";

export const getShows = () => axios.get("/shows");
export const getShow = (key: string) =>
  axios.get(`/shows/${encodeURIComponent(key)}`);
