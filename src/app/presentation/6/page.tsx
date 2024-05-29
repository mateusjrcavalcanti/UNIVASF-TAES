/* eslint-disable @next/next/no-img-element */
"use client";
import Openai from "../../../../public/openai.svg";
import { Code } from "@/components/code";
import NodeJS from "../../../../public/nodejs.svg";
import { Slide, TitleWithElement } from "@/components/slide";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { useOpenAI } from "../OpenAIContext";

/* eslint-disable react/no-unescaped-entities */
export default function Slide6() {
  return (
    <Slide>
      <TitleWithElement title="Auth">
        <div className="flex mb-5">
          <Openai className="mx-auto mr-5" width={100} fill="#23a27d" />
          <NodeJS className="mx-auto" />
        </div>
      </TitleWithElement>

      <AuthCodeExample />

      <ConfigureOpenAI />
    </Slide>
  );
}

const AuthCodeExample = () => {
  const { openai } = useOpenAI();

  const code = `import OpenAI from "openai";

  const openai = new OpenAI({
    organization: "${openai?.organization || ""}",
    apiKey: "${(openai?.apiKey || "").replace(/./g, "*")}",
  });
  `;

  return (
    <div className="p-5">
      <Code language="javascript" value={code} editable={false} />
    </div>
  );
};

const ConfigureOpenAI = () => {
  const { updateOpenAI, openai } = useOpenAI();

  return (
    <div className="mx-auto max-w-80 p-4">
      <div className="grid w-full max-w-sm mb-10 items-center gap-1.5">
        <Label htmlFor="organization">Organization:</Label>
        <Input
          id="organization"
          placeholder="Organization"
          className="text-black"
          value={openai?.organization || ""}
          onChange={(e) => updateOpenAI(openai?.apiKey || "", e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm mb-10 items-center gap-1.5">
        <Label htmlFor="organization">apiKey:</Label>
        <Input
          id="apiKey"
          type="password"
          placeholder="apiKey"
          className="text-black"
          value={openai?.apiKey || ""}
          onChange={(e) =>
            updateOpenAI(e.target.value, openai?.organization || "")
          }
        />
      </div>
    </div>
  );
};
