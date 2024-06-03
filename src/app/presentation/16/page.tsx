/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useOpenAI } from "../OpenAIContext";
import { Code } from "@/components/code";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
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

      <Title2>Variações (somente DALL-E 2)</Title2>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <img src="https://cdn.openai.com/API/images/guides/image_variation_original.webp" />
        <img src="https://cdn.openai.com/API/images/guides/image_variation_output.webp" />
      </div>

      <Paragraph>
        Semelhante ao endpoint de edições, a imagem de entrada deve ser uma
        imagem PNG quadrada com menos de 4MB de tamanho.
      </Paragraph>
    </Slide>
  );
}
