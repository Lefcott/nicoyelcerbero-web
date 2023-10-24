import { MessageInterface, MessagesInterface } from "@/interfaces/messages";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type MessagesStore = MessagesInterface & {
  addMessage: (newMessage: MessageInterface) => void;
};

export const useMessagesStore = create<MessagesStore>()(
  devtools(
    (set) => ({
      messages: [],
      conversationId: "",
      from: "user",
      chatToken: "",
      addMessage: (newMessage: MessageInterface) =>
        set((prevState) => ({
          messages: [...prevState.messages, newMessage],
        })),
    }),
    { name: "show-storage" }
  )
);
