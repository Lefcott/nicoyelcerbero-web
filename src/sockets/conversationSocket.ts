import { io } from "socket.io-client";
import { fromAd, pageVisitId } from "@/constants";
import { useMessagesStore } from "@/store/messages";
import { MessageInterface } from "@/interfaces/messages";

const conversationSocket = io(`${process.env.API_URL || ""}/conversation`, {
  query: { pageVisitId: fromAd ? pageVisitId : "" },
});

conversationSocket.on(
  "newMessage",
  (message: MessageInterface, conversationId: string) => {
    if (
      useMessagesStore.getState().conversationId === conversationId &&
      message.from !== useMessagesStore.getState().from
    ) {
      if (typeof Audio !== "undefined") {
        new Audio("/new-message.mp3").play();
      }
      useMessagesStore.getState().addMessage(message);
      useMessagesStore.getState().unreadMessages += 1;
    }
  }
);

conversationSocket.on(
  "newConversation",
  ({ pageVisitId: _pageVisitId, conversationId }) => {
    if (_pageVisitId === pageVisitId) {
      useMessagesStore.setState({ conversationId });
    }
  }
);
