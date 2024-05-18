/* eslint-disable @next/next/no-img-element */
"use client";

import { Code } from "@/components/code";
import NodeJS from "../../../../public/nodejs.svg";

/* eslint-disable react/no-unescaped-entities */
export default function Slide2() {
  return (
    <>
      <div>
        <>
          <NodeJS className="mx-auto mb-5" />
        </>

        <h1 className="text-3xl font-bold sm:text-4xl text-center mb-5">
          Auth
        </h1>

        <Code language="javascript" value={code} editable={false} />
      </div>
    </>
  );
}

const code = `import OpenAI from "openai";

const openai = new OpenAI({
  organization: "",
  apiKey: "",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
`;
