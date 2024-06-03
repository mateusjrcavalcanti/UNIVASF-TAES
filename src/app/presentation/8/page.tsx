/* eslint-disable @next/next/no-img-element */
"use client";
import { Code } from "@/components/code";
import { Slide, TitleWithElement } from "@/components/slide";
import { FaCode, FaCodePullRequest } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { AuthCode } from "../6/page";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useOpenAI } from "../OpenAIContext";
import { Chat } from "@/components/chat";
import { useEffect, useState } from "react";
import {
  ChatCompletionMessageParam,
  ChatModel,
} from "openai/resources/index.mjs";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <Slide>
      <TitleWithElement title="Geração de texto" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#5436da] to-[#341c9c]"
          }
        >
          {<IoChatbubbleEllipsesOutline size={24} />}
        </span>
      </TitleWithElement>
      <TabsRequest />
    </Slide>
  );
}

function TabsRequest() {
  const [chatCompletionsMessages, setChatCompletionsMessages] = useState<
    ChatCompletionMessageParam[] | undefined
  >();
  const [chatCompletionsModel, setChatCompletionModel] = useState<
    (string & {}) | ChatModel
  >("");
  const [chatCompletionResponse, setChatCompletionResponse] =
    useState<any>(undefined);

  useEffect(() => {
    if (!chatCompletionsMessages) {
      const sessionData = sessionStorage.getItem("chatCompletionsMessages");
      const emptyData: ChatCompletionMessageParam[] = [
        { role: "system", content: "Você é um assistente útil." },
      ];
      if (sessionData) {
        setChatCompletionsMessages(JSON.parse(sessionData));
      } else {
        setChatCompletionsMessages(emptyData);
        sessionStorage.setItem(
          "chatCompletionsMessages",
          JSON.stringify(emptyData)
        );
      }
    }
    if (chatCompletionsModel == "") {
      const sessionData = sessionStorage.getItem("chatCompletionsModel");
      const emptyData: ChatModel = "gpt-3.5-turbo";
      if (sessionData) {
        setChatCompletionModel(emptyData);
      } else {
        setChatCompletionModel(emptyData);
        sessionStorage.setItem("chatCompletionsModel", emptyData);
      }
    }
    if (chatCompletionResponse == undefined) {
      const sessionData = sessionStorage.getItem("chatCompletionsResponse");
      if (sessionData) {
        setChatCompletionResponse(JSON.parse(sessionData));
      }
    }
  }, [chatCompletionsModel, chatCompletionsMessages, chatCompletionResponse]);

  useEffect(() => {
    chatCompletionResponse &&
      sessionStorage.setItem(
        "chatCompletionsResponse",
        JSON.stringify(chatCompletionResponse)
      );
  }, [chatCompletionResponse]);

  const addChatCompletionsMessage = (message: ChatCompletionMessageParam) => {
    const sessionData = JSON.parse(
      sessionStorage.getItem("chatCompletionsMessages") || "[]"
    );
    const messages = [...sessionData, message];
    sessionStorage.setItem("chatCompletionsMessages", JSON.stringify(messages));
    setChatCompletionsMessages(messages);
  };

  const { openai } = useOpenAI();

  return (
    <Tabs defaultValue="code">
      <TabsList className="flex my-5">
        <TabsTrigger
          className="flex items-center mx-auto py-2 px-4 text-lg font-bold rounded-xl bg-gray-400 data-[state=active]:bg-white data-[state=active]:text-black hover:bg-white hover:text-black"
          value="code"
        >
          <FaCode size={30} className="mr-1" /> Código
        </TabsTrigger>
        <TabsTrigger
          className="flex items-center mx-auto py-2 px-4  text-lg font-bold rounded-xl bg-gray-400 data-[state=active]:bg-white data-[state=active]:text-black hover:bg-white hover:text-black"
          value="response"
        >
          <FaCodePullRequest size={30} className="mr-1" /> Resposta
        </TabsTrigger>
        <TabsTrigger
          className="flex items-center mx-auto py-2 px-4  text-lg font-bold rounded-xl bg-gray-400 data-[state=active]:bg-white data-[state=active]:text-black hover:bg-white hover:text-black"
          value="chat"
        >
          <FaCodePullRequest size={30} className="mr-1" /> Chat
        </TabsTrigger>
      </TabsList>
      <TabsContent value="code">
        <Card className="bg-transpatent border-none">
          <CardContent className="space-y-2">
            <Code
              language="javascript"
              value={TextGenerationCode({
                chatCompletionsMessages,
                chatCompletionsModel,
              })}
              editable={false}
            />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="response">
        <Card className="bg-transpatent border-none">
          <CardContent className="space-y-2">
            <Code
              language="json"
              value={JSON.stringify(chatCompletionResponse, null, 3)}
              editable={false}
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="chat">
        <Card className="bg-transpatent border-none">
          <CardContent className="space-y-2">
            {chatCompletionsMessages && (
              <Chat
                messages={chatCompletionsMessages}
                handleSendMessage={async (message: string) => {
                  if (!message) return;
                  if (message)
                    addChatCompletionsMessage({
                      role: "user",
                      content: message,
                    });
                  const response = await openai?.chat.completions.create({
                    messages: JSON.parse(
                      sessionStorage.getItem("chatCompletionsMessages") || "[]"
                    ),
                    model: chatCompletionsModel,
                  });
                  setChatCompletionResponse(response);
                  response?.choices.map((choice: any) => {
                    addChatCompletionsMessage({
                      role: "assistant",
                      content: choice.message.content,
                    });
                  });
                }}
              />
            )}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

const TextGenerationCode = ({
  chatCompletionsMessages,
  chatCompletionsModel,
}: {
  chatCompletionsMessages?: ChatCompletionMessageParam[];
  chatCompletionsModel?: (string & {}) | ChatModel | undefined;
}) => {
  var code = AuthCode();
  code += `\n
async function main() {
\tconst completion = await openai.chat.completions.create({
\t\tmessages: [\n`;

  (chatCompletionsMessages || []).forEach((message) => {
    code += `\t\t\t{"role": "${message.role}", "content": "${message.content}"},\n`;
  });

  code += `\t\t],
\t\tmodel: "${chatCompletionsModel}",
\t});

\tconsole.log(completion.choices[0]);
}
main();
`;

  return code;
};
