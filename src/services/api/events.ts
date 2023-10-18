import axios from "../../utils/axios";
import { pageVisitId } from "@/constants";

export const createEvent = (name: string, description?: string) => {
  return axios.post("/events", { name, description, pageVisitId });
};
