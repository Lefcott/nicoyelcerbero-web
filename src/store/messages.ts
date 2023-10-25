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
      unreadMessages: 0,
      newMessages: [],
      conversationId: "",
      from: "user",
      chatToken: "",
      addMessage: (newMessage: MessageInterface) => {
        if (newMessage.from !== useMessagesStore.getState().from) {
          set((prevState) => ({
            newMessages: [...prevState.newMessages, newMessage],
          }));
          setTimeout(() => {
            set({
              newMessages: useMessagesStore.getState().newMessages.slice(1),
            });
          }, 4000);
        }
        set((prevState) => ({
          messages: [...prevState.messages, newMessage],
        }));
      },
    }),
    { name: "show-storage" }
  )
);
