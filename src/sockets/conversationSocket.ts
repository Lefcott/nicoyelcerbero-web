import { io } from "socket.io-client";
import { fromAd, pageVisitId } from "@/constants";
import { useMessagesStore } from "@/store/messages";
import { MessageInterface } from "@/interfaces/messages";

const conversationSocket = io(`${process.env.API_URL || ""}/conversation`, {
  query: { pageVisitId: fromAd ? pageVisitId : "" },
});

conversationSocket.on("newMessage", (message: MessageInterface) => {
  if (message.from !== useMessagesStore.getState().from) {
    new Audio("/new-message.mp3").play();
    useMessagesStore.getState().addMessage(message);
  }
});
