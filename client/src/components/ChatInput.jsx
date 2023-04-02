import React, { useState } from "react";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };

  return (
    <div
      className="w-full max-h-40 rounded-lg
    py-4 bg-white bg-opacity-10
    overflow-auto relative"
    >
      {loading ? (
        <img src="loader.gif" alt="loading" className="w-8 m-auto" />
      ) : (
        <>
          <input
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
            }}
            placeholder="In doubt? Ask me Anything!"
            rows={1}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="align-middle mx-2 border-0 bg-transparent outline-none w-11/12 scroll-auto"
          />

          <img
            onClick={handleSubmit}
            src="./send.png"
            width={20}
            alt="send"
            className=" opacity-50 hover:opacity-100 absolute top-4 right-2 hover:cursor-pointer ease-linear duration-150 hover:scale-110"
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;
