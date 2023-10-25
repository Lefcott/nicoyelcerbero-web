import { useMessagesStore } from "@/store/messages";
import axios from "../../utils/axios";

export const createConversation = async (pageVisitId: string) => {
  const { chatToken } = useMessagesStore.getState();
  const response = await axios.post("/conversations", {
    chatToken,
    pageVisitId,
  });

  return response;
};
