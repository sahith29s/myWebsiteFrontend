import { io } from "socket.io-client"
// src/Chat.js
import { useEffect, useState } from 'react';
// const socket = io("http://localhost:3000")

interface messageInterface {
  you: boolean,
  name?: string,
  message: string,
}

const Chat = () => {
  

  let name: string | null;

  const [oneMessage, setOneMessage] = useState<string>("");

  const [messages, setMessages] = useState<messageInterface[]>([
    { you: true, message: "man" }, { you: false, message: "cat", name: "balu" },
    { you: true, message: "man" }, { you: false, message: "cat", name: "balu" },
    { you: true, message: "man" }, { you: false, message: "cat", name: "balu" },
    { you: true, message: "man" }, { you: false, message: "cat", name: "balu" },
    { you: true, message: "man" }, { you: false, message: "cat", name: "balu" },
    { you: true, message: "man" }, { you: false, message: "cat", name: "balu" },
    { you: true, message: "man" }, { you: false, message: "cat", name: "balu" },
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

  };


  return (
    <>
      <div className="bg-yellow-600 font-amita text-3xl text-center h-[4rem] flex justify-center items-center">Chat app <span className="text-sm relative top-3">still under construction</span></div>

      <main className="sm:h-[73vh] h-[45vh] container mx-auto py-5">

        <div className="h-[80%] overflow-y-auto">

          {
            messages.map((messObj) => {
              return (
                <div className={messObj.you ? "rightBox" : "leftBox"}>
                  {
                    messObj.name ? <h3 className="name">{messObj.name}</h3> : ""
                  }
                  <p className="message">{messObj.message}</p>
                </div>
              )
            })

          }

          {/* <div className="leftBox">
            <h3 className="text-orange-400">sahith</h3>
            <p className="message">message xyz</p>
          </div>

          <div className="leftBox">
            <h3 className="name">sahith</h3>
            <p className="message" >message xyz</p>
          </div>

          <div className="rightBox">
            <p className="message">mesage</p>
          </div> */}
        </div>


        <form onSubmit={handleSubmit} className="flex items-center relative clear-both top-[1.5rem] border-gray-200 py-2 px-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full border-none outline-none p-3 text-white bg-gray-800 rounded-l-md transition-all duration-300 focus:ring focus:ring-blue-300"
              value={oneMessage}
              onChange={(e) => setOneMessage(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-4 bg-blue-500  text-white rounded-r-md transition-all duration-300 hover:bg-blue-600 "
            >
              Send
            </button>
          </div>
        </form>

        {/* You can add a send button or any other UI elements here */}
        {/* </div> */}

      </main>
    </>
  )
}

export default Chat