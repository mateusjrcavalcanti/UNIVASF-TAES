/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import Openai from "../../public/openai.svg";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useState } from "react";

export const Chat = ({
  messages,
  handleSendMessage,
}: {
  messages: Array<ChatCompletionMessageParam>;
  handleSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="mt-8 overflow-auto">
        {messages.map((message, index) => {
          if (message.role === "system" || message.role === "user") {
            return (
              <div className="mb-4 text-right" key={`message-${index}`}>
                <div
                  className={cn([
                    "inline-block rounded-full p-2 px-6 text-white",
                    message.role === "system" ? "bg-gray-600" : "bg-blue-600",
                  ])}
                >
                  <span>{message.content as string}</span>
                </div>
              </div>
            );
          } else {
            return (
              <div className="mb-4 flex text-left" key={`message-${index}`}>
                <Openai
                  className="w-12 h-12 rounded-full mb-5"
                  width={30}
                  fill="#23a27d"
                />
                <div className="px-2">
                  <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span>{message.content}</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="flex-2 pt-4 pb-10">
        <div className="write bg-gray-200 shadow flex rounded-lg">
          <div className="flex-1">
            <textarea
              name="message"
              className="w-full block outline-none py-4 px-4 bg-transparent"
              rows={1}
              placeholder="Mensagem aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex-2 w-32 p-2 flex content-center items-center">
            <div className="flex-1">
              <button
                className="w-full font-bold bg-blue-600 rounded-full py-2 hover:bg-blue-800"
                onClick={() => {
                  handleSendMessage(message);
                  setMessage("");
                }}
              >
                <span className="text-white">ENVIAR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
