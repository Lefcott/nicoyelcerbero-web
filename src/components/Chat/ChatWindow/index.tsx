import { createMessage } from "@/services/api/messages";
import { useMessagesStore } from "@/store/messages";
import { isMobile } from "@/utils/isMobile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ChatWindow = ({ onClose }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const { from, messages, addMessage } = useMessagesStore((state) => state);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const handleAddMessage = async () => {
    const parsedMessage = currentMessage.trim();
    if (!parsedMessage) {
      return;
    }

    const messageTime = new Date().toISOString(); // Get the current time
    addMessage({ from, text: parsedMessage, time: messageTime }); // Include the message time
    setCurrentMessage("");

    if (textareaRef.current) {
      textareaRef.current.focus(); // Focus on the textarea
    }

    await createMessage(parsedMessage);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isMobile() && !e.shiftKey) {
      e.preventDefault();
      handleAddMessage();
    }
  };

  const handleFocus = () => {
    if (isMobile()) {
      // If it's a mobile device, scroll to the bottom when the textarea is focused
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the message container when messages change
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current && !isMobile()) {
      textareaRef.current.focus(); // Focus on the textarea
    }
  }, []);

  return (
    <>
      <div className="fixed right-0 bottom-0 w-full h-full md:w-[500px] md:h-2/3 md:max-w-[50%] md:mr-32 bg-[#ffffffee] rounded-t-xl">
        <div className="w-full h-12 flex justify-between items-center bg-green-500 rounded-t-xl">
          <div className="text-center flex-grow">
            Chat con <b>Leandro Cotti</b>
          </div>
          <div className="mr-2 text-3xl cursor-pointer" onClick={onClose}>
            ✖
          </div>
        </div>
      </div>
      <div
        className="fixed top-12 md:top-[calc(33vh+48px)] right-0 w-full h-[calc(100vh-48px-56px-56px)] md:h-[calc(66vh-48px-56px)] md:w-[500px] md:max-w-[50%] md:mr-32 overflow-y-auto"
        ref={messageContainerRef}
      >
        {/* Message list */}
        <div className="flex flex-col p-4">
          {messages.map((message, index) => (
            <div key={index} className={`my-2`}>
              <div
                className={`${
                  message.from === "user"
                    ? "bg-green-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg ml-auto"
                    : "bg-gray-300 text-black rounded-tl-lg rounded-tr-lg rounded-br-lg"
                } flex w-2/3 whitespace-pre-wrap p-2 pb-4`}
              >
                {message.text}
                {
                  <div
                    className={`flex w-7 text-xs text-gray-700 ml-auto mt-auto`}
                  >
                    {new Date(message.time).getHours()}:
                    {`${new Date(message.time).getMinutes()}`.padStart(2, "0")}
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        className="fixed right-14 bottom-0 w-[calc(100%-56px)] h-14 md:w-[calc(500px-56px)] md:max-w-[50%] md:mr-32 text-black resize-none p-4 shadow-[0_0_1px_1px_#ccc]"
      />
      <div className="relative w-0 h-0">
        <div className="absolute top-0 left-0 w-0 h-0 border-t-8 border-r-8 border-b-0 border-l-8 border-white"></div>
      </div>

      {/* Send message button */}
      <div
        onClick={handleAddMessage}
        className="fixed right-0 bottom-0 w-14 h-14 md:mr-32 bg-green-500 cursor-pointer flex justify-center items-center rounded-r-lg"
      >
        <Image
          width={30}
          height={30}
          alt="send-message-icon"
          src="/right-arrow.png"
        />
      </div>
    </>
  );
};
