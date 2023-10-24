import { useMessagesStore } from "@/store/messages";
import axios from "../../utils/axios";
import { MessageInterface } from "@/interfaces/messages";

export const createMessage = async (text: string) => {
  const { conversationId, chatToken, from } = useMessagesStore.getState();
  const response = await axios.post("/messages", {
    chatToken,
    from,
    text,
    conversationId,
  });

  if (!conversationId) {
    useMessagesStore.setState({ conversationId: response.data.conversationId });
  }
};

export const getMessages = async (conversationId: string) => {
  const response = await axios.get<{ messages: MessageInterface[] }>(
    "/messages",
    {
      params: { conversationId },
    }
  );
  const { messages } = response.data;

  useMessagesStore.setState({ messages });

  return messages;
};
