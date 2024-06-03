/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Code } from "@/components/code";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useOpenAI } from "../OpenAIContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  const { openai } = useOpenAI();
  const [prompt, setPrompt] = useState("O que há nesta imagem?");
  const [url, setUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
  );
  const [response, setResponse] = useState<any>();
  return (
    <Slide>
      <TitleWithElement title="Visão" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#7719c3] to-[#9f4ae6]"
          }
        >
          {<MdOutlineRemoveRedEye size={24} />}
        </span>
      </TitleWithElement>

      <div className="pt-5">
        <Code
          language="javascript"
          value={TextGenerationCode({ prompt, url })}
          editable={false}
        />
      </div>

      <div className="p-3 grid grid-cols-2 gap-4">
        <div>
          <div className="w-full items-center gap-1.5">
            <Label htmlFor="prompt">Prompt</Label>
            <Input
              id="prompt"
              className="text-black"
              value={prompt}
              onChange={async (event) => {
                setPrompt(event.target.value);
              }}
            />
          </div>
          <div className="w-full mt-5 items-center gap-1.5">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              className="text-black"
              value={url}
              onChange={async (event) => {
                setUrl(event.target.value);
              }}
            />
          </div>
          <Button
            className="mt-5"
            onClick={async () => {
              const response = await openai?.chat.completions.create({
                model: "gpt-4o",
                messages: [
                  {
                    role: "user",
                    content: [
                      { type: "text", text: prompt },
                      {
                        type: "image_url",
                        image_url: {
                          url,
                        },
                      },
                    ],
                  },
                ],
              });
              response && setResponse(response);
            }}
          >
            Analisar
          </Button>
        </div>
        <div>
          {(response && (
            <pre className="pt-2 tex-white overflow-x-auto">
              {JSON.stringify(response, null, 2)}
            </pre>
          )) || <img src={url} />}
        </div>
      </div>
    </Slide>
  );
}

const TextGenerationCode = ({
  prompt,
  url,
}: {
  prompt: string;
  url: string;
}) => {
  const { AuthCode } = useOpenAI();
  let code = AuthCode();
  code += `\n
async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "${prompt}" },
          {
            type: "image_url",
            image_url: {
              "url": "${url}",
            },
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
}
main();
`;

  return code;
};
