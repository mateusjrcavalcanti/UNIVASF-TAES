/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { useOpenAI } from "../OpenAIContext";
import { Code } from "@/components/code";
import { TiMicrophoneOutline } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  const [input, setInput] = useState(
    "Esse audio foi gerado usando a api da OpenAI!"
  );

  const { openai } = useOpenAI();
  return (
    <Slide>
      <TitleWithElement title="Texto para fala" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#19c37d] to-[#13a065]"
          }
        >
          {<TiMicrophoneOutline size={24} />}
        </span>
      </TitleWithElement>

      <Paragraph>
        O endpoint recebe três entradas principais: o modelo, o texto que deve
        ser transformado em áudio e a voz a ser usada para a geração de áudio.
        Um simples pedido seria o seguinte:
      </Paragraph>

      <div className="pt-5">
        <Code
          language="javascript"
          value={TextGenerationCode({ input })}
          editable={false}
        />
      </div>

      <div className="flex items-center p-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 mr-5 text-black border border-gray-300 rounded"
        />
        <Button
          className="my-auto"
          onClick={async () => {
            const mp3 = await openai?.audio.speech.create({
              model: "tts-1",
              voice: "alloy",
              input,
            });
            if (!mp3) return;
            const arrayBuffer = await mp3.arrayBuffer();
            const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            audio.play();
            audio.onended = () => {
              URL.revokeObjectURL(url);
            };
          }}
        >
          Gerar
        </Button>
      </div>
    </Slide>
  );
}

const TextGenerationCode = ({ input }: { input: string }) => {
  const { AuthCode } = useOpenAI();
  let code = `import fs from "fs";
import path from "path";
`;

  code += AuthCode();
  code += `\n
const speechFile = path.resolve("./speech.mp3");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "${input}",
  });

  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();
`;

  return code;
};
