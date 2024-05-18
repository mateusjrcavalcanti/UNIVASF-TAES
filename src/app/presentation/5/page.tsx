/* eslint-disable @next/next/no-img-element */
"use client";
import "react-medium-image-zoom/dist/styles.css";

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { dracula } from "@uiw/codemirror-theme-dracula";

import Openai from "../../../../public/openai.svg";

/* eslint-disable react/no-unescaped-entities */
export default function Slide2() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold sm:text-4xl text-center">
          Etapas (NodeJS)
        </h1>

        <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
          3. Instale a biblioteca OpenAI Node.js.
        </h2>

        <CodeMirror
          className="mt-4"
          value={`npm install openai\n\t# or\nyarn add openai\n\t# or\npnpm i openai`}
          height="200px"
          theme={dracula}
          extensions={[StreamLanguage.define(shell)]}
          editable={false}
          autoFocus={false}
        />
      </div>
      <div className="flex p-14 items-center">
        <Openai width="300px" height="300px" fill="#23a27d" />
      </div>
    </>
  );
}
