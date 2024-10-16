// src/components/ChatBubble.js
import React from 'react';
import { ChatIcon } from '@heroicons/react/solid'; // Example icon from heroicons

const ChatBubble = () => {
  const openChat = () => {
    // Implement chat functionality
    alert('Opening AI Chat Assistant...');
  };

  return (
    <div
      className="fixed bottom-10 right-10 bg-orangeCustom rounded-full w-20 h-20 flex justify-center items-center shadow-lg cursor-pointer text-white text-lg font-bold"
      onClick={openChat}
    >
      {/* You can use any icon library */}
      <ChatIcon className="h-8 w-8 text-white" />
    </div>
  );
};

export default ChatBubble;
