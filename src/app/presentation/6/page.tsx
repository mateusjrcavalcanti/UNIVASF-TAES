/* eslint-disable @next/next/no-img-element */
"use client";
import Openai from "../../../../public/openai.svg";
import { Code } from "@/components/code";
import NodeJS from "../../../../public/nodejs.svg";
import { TitleWithElement } from "@/components/slide";

/* eslint-disable react/no-unescaped-entities */
export default function Slide6() {
  return (
    <>
      <div>
        <TitleWithElement title="Auth">
          <div className="flex mb-5">
            <Openai className="mx-auto mr-5" width={100} fill="#23a27d" />
            <NodeJS className="mx-auto" />
          </div>
        </TitleWithElement>

        <Code language="javascript" value={code({})} editable={false} />
      </div>
    </>
  );
}

const code = ({
  organization = "",
  apiKey = "",
}: {
  organization?: string;
  apiKey?: string;
}) => {
  return `import OpenAI from "openai";

  const openai = new OpenAI({
    organization: "${organization}",
    apiKey: "${apiKey}",
  });
  `;
};
