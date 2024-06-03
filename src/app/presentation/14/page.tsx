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

      <Title2>Edits (somente DALL-E 2)</Title2>

      <div className="grid grid-cols-3 gap-4">
        <img src="https://cdn.openai.com/API/images/guides/image_edit_original.webp" />
        <img src="https://cdn.openai.com/API/images/guides/image_edit_mask.webp" />
        <img src="https://cdn.openai.com/API/images/guides/image_edit_output.webp" />
      </div>
      <span className="text-xl text-white">
        Prompt: uma área de lounge interior iluminada com piscina contendo um
        flamingo
      </span>

      <Paragraph>
        A imagem e a máscara carregadas devem ser imagens PNG quadradas com
        menos de 4 MB de tamanho e também devem ter as mesmas dimensões umas das
        outras. As áreas não transparentes da máscara não são usadas ao gerar a
        saída, portanto, elas não precisam necessariamente corresponder à imagem
        original como o exemplo acima.
      </Paragraph>
    </Slide>
  );
}
