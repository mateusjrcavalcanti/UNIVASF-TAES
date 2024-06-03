"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { MdOutlineRemoveRedEye } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <Slide>
      <TitleWithElement title="Visão" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#7719c3] to-[#9f4ae6]"
          }
        >
          {<MdOutlineRemoveRedEye size={24} />}
        </span>
      </TitleWithElement>

      <Title2>Limitações</Title2>

      <Paragraph>
        As entradas de imagem são tarifadas e cobradas em tokens, da mesma forma
        que as entradas de texto. O custo em tokens de uma determinada imagem é
        determinado por dois fatores: seu tamanho e a opção de detalhe em cada
        bloco de image_url. Todas as imagens com detail: low custam 85 tokens
        cada. Imagens com detail: high são primeiro redimensionadas para caber
        dentro de um quadrado de 2048 x 2048, mantendo sua proporção. Em
        seguida, são escaladas de modo que o lado mais curto da imagem tenha
        768px de comprimento. Por fim, contamos quantos quadrados de 512px a
        imagem consiste. Cada um desses quadrados custa 170 tokens. Outros 85
        tokens são sempre adicionados ao total final.
      </Paragraph>

      <Paragraph>
        Uma imagem quadrada de 1024 x 1024 em modo detail: high custa 765
        tokens:
      </Paragraph>

      <ul className="list-disc px-10 text-xl text-justify mt-4 text-gray-300">
        <li>1024 é menor que 2048, então não há redimensionamento inicial.</li>
        <li>
          O lado mais curto é 1024, então escalamos a imagem para 768 x 768.
        </li>
        <li>
          São necessários 4 quadrados de 512px para representar a imagem, então
          o custo final em tokens é 170 * 4 + 85 = 765.
        </li>
      </ul>

      <Paragraph>
        Uma imagem de 2048 x 4096 em modo detail: high custa 1105 tokens:
      </Paragraph>
      <ul className="list-disc px-10 text-xl text-justify mt-4 text-gray-300">
        <li>
          Redimensionamos a imagem para 1024 x 2048 para caber dentro do
          quadrado de 2048.
        </li>
        <li>
          O lado mais curto é 1024, então escalamos a imagem para 768 x 1536.
        </li>
        <li>
          São necessários 6 quadrados de 512px, então o custo final em tokens é
          170 * 6 + 85 = 1105.
        </li>
      </ul>

      <Paragraph>
        Uma imagem de 4096 x 8192 em modo detail: low custa 85 tokens:
      </Paragraph>
      <ul className="list-disc px-10 text-xl text-justify mt-4 text-gray-300">
        <li>
          Independentemente do tamanho de entrada, as imagens de baixo detalhe
          têm um custo fixo de 85 tokens.
        </li>
      </ul>
    </Slide>
  );
}
