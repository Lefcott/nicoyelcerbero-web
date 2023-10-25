export interface MessageInterface {
  from: "user" | "admin";
  text: string;
}

export interface MessagesInterface {
  chatToken: string;
  from: "user" | "admin";
  messages: MessageInterface[];
  unreadMessages: number;
  conversationId: string;
}
