/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { useOpenAI } from "../OpenAIContext";
import { Code } from "@/components/code";
import { TiMicrophoneOutline } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Transcription } from "openai/resources/audio/transcriptions.mjs";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  const [transcription, setTranscription] = useState<Transcription>();
  useEffect(() => {
    console.log(transcription);
  }, [transcription]);

  const { openai } = useOpenAI();
  return (
    <Slide>
      <TitleWithElement title="Fala para texto" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#ef4146] to-[#c73136]"
          }
        >
          {<BsSoundwave size={24} />}
        </span>
      </TitleWithElement>

      <Title2>Transcrições</Title2>

      <Paragraph>
        A API de transcrições recebe como entrada o arquivo de áudio que você
        deseja transcrever e o formato de arquivo de saída desejado para a
        transcrição do áudio. Atualmente, suportamos múltiplos formatos de
        entrada e saída de arquivos.
      </Paragraph>

      <div className="pt-5">
        <Code
          language="javascript"
          value={TextGenerationCode()}
          editable={false}
        />
      </div>

      <div className="items-center p-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="audio">Audio</Label>
          <Input
            id="audio"
            type="file"
            onChange={async (event) => {
              if (event.target?.files?.length) {
                console.log(event.target.files[0]);
                const result = await openai?.audio.transcriptions.create({
                  file: event.target.files[0],
                  model: "whisper-1",
                });
                result && setTranscription(result);
              }
            }}
          />
        </div>
        <pre className="pt-2 tex-white">{transcription?.text || ""}</pre>
      </div>
    </Slide>
  );
}

const TextGenerationCode = () => {
  const { AuthCode } = useOpenAI();
  let code = `import fs from "fs";
`;

  code += AuthCode();
  code += `\n
const speechFile = path.resolve("./speech.mp3");

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("/path/to/file/audio.mp3"),
    model: "whisper-1",
  });

  console.log(transcription.text);
}
main();
`;

  return code;
};
