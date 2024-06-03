/* eslint-disable @next/next/no-img-element */
"use client";
import { Code } from "@/components/code";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useOpenAI } from "../OpenAIContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { FaCode, FaCodePullRequest } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { ImageGenerateParams } from "openai/resources/images.mjs";
type Size = ImageGenerateParams["size"];

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  const [prompt, setPrompt] = useState<string | undefined>();
  const [n, setN] = useState<number | undefined>();
  const [size, setSize] = useState<Size>("1024x1024");
  const [imageGenerationResponse, setImageGenerationResponse] =
    useState<any>(undefined);

  const { openai } = useOpenAI();

  useEffect(() => {
    if (!prompt) {
      const sessionData = sessionStorage.getItem("imageGenerationPrompt");
      const emptyData = "cachorro caramelo";
      if (sessionData) {
        setPrompt(JSON.parse(sessionData));
      } else {
        setPrompt(emptyData);
        sessionStorage.setItem(
          "imageGenerationPrompt",
          JSON.stringify(emptyData)
        );
      }
    }
    if (!n) {
      const sessionData = sessionStorage.getItem("imageGenerationN");
      const emptyData = 1;
      if (sessionData) {
        setN(JSON.parse(sessionData));
      } else {
        setN(emptyData);
        sessionStorage.setItem("imageGenerationN", JSON.stringify(emptyData));
      }
    }
    if (imageGenerationResponse == undefined) {
      const sessionData = sessionStorage.getItem("imageGenerationResponse");
      if (sessionData) {
        setImageGenerationResponse(JSON.parse(sessionData));
      }
    }
  }, [imageGenerationResponse, n, prompt]);

  return (
    <Slide>
      <TitleWithElement title="Geração de imagem" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#fa7507] to-[#ff7300]"
          }
        >
          {<HiOutlinePhotograph size={24} />}
        </span>
      </TitleWithElement>

      <Title2>Geração de Imagem</Title2>

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
            value="form"
          >
            <FaCodePullRequest size={30} className="mr-1" /> Form
          </TabsTrigger>
        </TabsList>
        <TabsContent value="code">
          <Card className="bg-transpatent border-none">
            <CardContent className="space-y-2">
              {prompt && n && (
                <Code
                  language="javascript"
                  value={ExampleCode({ size, n, prompt })}
                  editable={false}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="response">
          <Card className="bg-transpatent border-none">
            <CardContent className="space-y-2">
              <Code
                language="json"
                value={JSON.stringify(imageGenerationResponse, null, 3)}
                editable={false}
              />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="form">
          <Card className="bg-transpatent border-none">
            <CardContent className="space-y-2">
              <div className="mx-auto max-w-80 p-4 text-white">
                <div className="grid w-full max-w-sm mb-10 items-center gap-1.5">
                  <Label htmlFor="prompt">Prompt:</Label>
                  <Input
                    key={"prompt"}
                    placeholder="Prompt"
                    className="text-black"
                    value={prompt}
                    onChange={(e) => {
                      setPrompt(e.target.value);
                      sessionStorage.setItem(
                        "imageGenerationPrompt",
                        JSON.stringify(e.target.value)
                      );
                    }}
                  />
                </div>
                <div className="grid w-full max-w-sm mb-10 items-center gap-1.5">
                  <Label htmlFor="n">n:</Label>
                  <Input
                    key="n"
                    type="number"
                    placeholder="n"
                    className="text-black"
                    value={n}
                    onChange={(e) => {
                      setN(parseInt(e.target.value));
                      sessionStorage.setItem(
                        "imageGenerationN",
                        JSON.stringify(parseInt(e.target.value))
                      );
                    }}
                  />
                </div>
                <Button
                  onClick={async () => {
                    if (!openai || !size || !prompt) return;
                    const res = await openai?.images.generate({
                      model: "dall-e-3",
                      prompt: prompt,
                      n: n,
                      size: size,
                    });
                    sessionStorage.setItem(
                      "imageGenerationResponse",
                      JSON.stringify(res)
                    );
                    setImageGenerationResponse(res);
                  }}
                >
                  Gerar Imagem
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              {imageGenerationResponse?.data?.map(
                (image: { url: string }, i: number) => (
                  <img
                    key={i}
                    src={image.url}
                    alt={`Generated image ${i}`}
                    className="mx-auto"
                  />
                )
              )}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Slide>
  );
}

const ExampleCode = ({
  size,
  n,
  prompt,
}: {
  size: Size;
  n: number;
  prompt: string;
}) => {
  const { AuthCode } = useOpenAI();

  var code = AuthCode();

  code += `\n\nconst response = await openai.images.generate({`;
  code += `\n  model: "dall-e-3",`;
  code += `\n  prompt: "${prompt}",`;
  code += `\n  n: ${n},`;
  code += `\n  size: "${size}",`;
  code += `\n});`;
  code += `\n\nimage_url = response.data[0].url;`;
  code += `\n`;

  return code;
};
