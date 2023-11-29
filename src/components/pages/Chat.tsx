import { io } from "socket.io-client"
import { useEffect, useState } from 'react';
import PopupForName from '../PopupForName';
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

// const socket = io("http://localhost:3000");
const socket = io("https://hakur.onrender.com/");

type messageInterface = {
  you: boolean,
  name?: string,
  message: string,
}


const Chat = () => {

  const toast = useToast();
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("formData")) {
      setName(JSON.parse(localStorage.getItem("formData") as string)[0].username);
    }
    else {
      toast({
        title: "Login Required",
        description: "Login first to access chat",
        status: "success",
        position: "bottom-left",
        duration: 9000,
        isClosable: true,
      })
      history("/login");
    }

  }, [])

  const [name, setName] = useState<string>("");
  const [oneMessage, setOneMessage] = useState<string>("");

  useEffect((): void => {

    socket.on("messageBackFromServer", (messObj) => {
      setMessages((prevMess) => [...prevMess, messObj])
    })
  }, [])

  const [messages, setMessages] = useState<messageInterface[]>([]);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (oneMessage == " " || oneMessage == "") {
      setOneMessage("");
      return;
    }
    setMessages([...messages, { you: true, message: oneMessage }]);
    socket.emit("message", { name: name, you: false, message: oneMessage })
    setOneMessage("");
    return;
  };


  return (
    <>
      {!name &&
        <>
          <PopupForName setName={setName} />
        </>
      }
      {
        name &&
        <>
          <div className="bg-yellow-600 font-amita text-3xl text-center h-[4rem] flex justify-center items-center">Chat app
            <span className="text-sm relative top-3">still under construction
              <span className="mx-2 font-serif">{name}</span>
            </span>
          </div>

          <main className="sm:h-[73vh] h-[45vh] container mx-auto py-5">
            <div className="h-[80%] overflow-y-auto">

              {
                messages.map((messObj, index) => {
                  return (
                    <div key={index} className={messObj.you ? "rightBox" : "leftBox"}>
                      {
                        (index >= 1) ?
                          (messages[index - 1].name != messObj.name) ? <h3 className="name">{messObj.name}</h3> : ""
                          : <h3 className="name">{messObj.name}</h3>
                      }

                      <p className="message">{messObj.message}</p>
                    </div>
                  )
                })

              }
            </div>
            <form onSubmit={handleSubmit} className="flex items-center relative clear-both top-[1.5rem] border-gray-200 py-2 px-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full border-none outline-none p-3 text-white bg-gray-800 rounded-l-md transition-all duration-300 focus:ring focus:ring-blue-300"

                  value={oneMessage}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/ +/g, ' ');
                    setOneMessage(newValue)

                  }}
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

          </main> </>
      }
    </>
  )
}

export default Chat