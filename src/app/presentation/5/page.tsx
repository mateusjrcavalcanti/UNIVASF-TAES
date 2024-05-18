/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Code } from "@/components/code";
import NodeJS from "../../../../public/nodejs.svg";

/* eslint-disable react/no-unescaped-entities */
export default function Slide2() {
  return (
    <div>
      <>
        <NodeJS className="mx-auto mb-5" />
      </>

      <h1 className="text-3xl font-bold sm:text-4xl text-center">
        Etapas (NodeJS)
      </h1>

      <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
        3.1 Crie um diretório e inicie um projeto Node.js.
      </h2>

      <Code
        language="shell"
        value={`mkdir taes\ncd taes\nnpm init -y`}
        editable={false}
      />

      <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
        3.2 Instale a biblioteca OpenAI Node.js.
      </h2>

      <Code language="shell" value={`npm i openai`} editable={false} />

      <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
        Resultado:
      </h2>

      <img src="/project/created.png" />
    </div>
  );
}
