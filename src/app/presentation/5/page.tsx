/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Code } from "@/components/code";
import NodeJS from "../../../../public/nodejs.svg";
import { Slide, Title2, TitleWithElement } from "@/components/slide";

/* eslint-disable react/no-unescaped-entities */
export default function Slide5() {
  return (
    <Slide>
      <TitleWithElement title="Etapas (NodeJS)">
        <NodeJS className="mx-auto mb-5" />
      </TitleWithElement>

      <Title2>3.1 Crie um diretório e inicie um projeto Node.js.</Title2>

      <Code
        language="shell"
        value={`mkdir taes\ncd taes\nnpm init -y`}
        editable={false}
      />

      <Title2>3.2 Instale a biblioteca OpenAI Node.js.</Title2>

      <Code language="shell" value={`npm i openai`} editable={false} />

      <Title2>Resultado:</Title2>

      <img src="/project/created.png" />
    </Slide>
  );
}
