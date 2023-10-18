import axios from "../../utils/axios";

export const createOpinion = (text) => axios.post("/opinions", { text });
