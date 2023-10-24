import { useState } from "react";
import { ChatWindow } from "./ChatWindow";

export const Chat = () => {
  const [chatWindowOpen, setChatWindowOpen] = useState(false);

  return (
    <div className="fixed right-0 bottom-0 z-10">
      <div
        onClick={() => setChatWindowOpen(!chatWindowOpen)}
        className="m-3 w-16 h-16 md:w-20 md:h-20 rounded-full shadow-[0_0_3px_1px] duration-150 hover:scale-105 active:scale-110 cursor-pointer"
      >
        <div className="relative w-full h-full">
          <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full absolute bottom-[2px] right-[2px] border-2" />
          <img
            src="https://res.cloudinary.com/dua355asm/image/upload/v1698029058/Lean_9-removebg_akngfn.png"
            alt="profile-image"
            className="rounded-full bg-black object-cover z-10 w-full h-full"
          />
        </div>
      </div>
      {chatWindowOpen && (
        <ChatWindow onClose={() => setChatWindowOpen(false)} />
      )}
    </div>
  );
};
