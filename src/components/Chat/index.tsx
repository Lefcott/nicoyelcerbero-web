import { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import { useMessagesStore } from "@/store/messages";

export const Chat = () => {
  const [chatWindowOpen, setChatWindowOpen] = useState(false);
  const { unreadMessages, newMessages } = useMessagesStore();

  const handleOpenChatWindow = () => {
    useMessagesStore.setState({ unreadMessages: 0, newMessages: [] });
    setChatWindowOpen(!chatWindowOpen);
  };

  const handleCloseChatWindow = () => {
    useMessagesStore.setState({ unreadMessages: 0, newMessages: [] });
    setChatWindowOpen(false);
  };

  return (
    <div className="fixed right-0 bottom-0 z-10">
      {!chatWindowOpen && (
        <div className="absolute bottom-8 md:bottom-10 right-20 md:right-24 w-fit flex flex-col items-end">
          {newMessages.map((message, i) => (
            <div
              key={i}
              className="bg-gray-500 p-1 m-2 rounded-lg w-fit whitespace-nowrap translate-y-1/2 text-[11px] md:text-sm"
            >
              {message.text}
            </div>
          ))}
        </div>
      )}
      <div
        onClick={handleOpenChatWindow}
        className="m-3 w-16 h-16 md:w-20 md:h-20 rounded-full shadow-[0_0_3px_1px] duration-150 hover:scale-105 active:scale-110 cursor-pointer"
      >
        <div className="relative w-full h-full">
          {!chatWindowOpen && unreadMessages > 0 && (
            <div className="w-4 h-4 md:w-5 md:h-5 bg-red-600 rounded-full absolute top-0 left-0 flex justify-center items-center">
              {unreadMessages}
            </div>
          )}
          <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full absolute bottom-[2px] right-[2px] border-2" />
          <img
            src="https://res.cloudinary.com/dua355asm/image/upload/v1698029058/Lean_9-removebg_akngfn.png"
            alt="profile-image"
            className="rounded-full bg-black object-cover z-10 w-full h-full"
          />
        </div>
      </div>
      {chatWindowOpen && <ChatWindow onClose={handleCloseChatWindow} />}
    </div>
  );
};
