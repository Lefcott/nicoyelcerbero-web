import axios from "../../utils/axios";

export const createOpinion = (text: string) =>
  axios.post("/opinions", { text });
