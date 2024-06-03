"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { HiOutlinePhotograph } from "react-icons/hi";

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

      <Title2>Introdução</Title2>

      <Paragraph>
        A API Images fornece três métodos para interagir com imagens:
      </Paragraph>

      <ul className="list-disc px-10 text-xl text-justify mt-4 text-gray-300">
        <li>
          Criação de imagens a partir do zero com base em um prompt de texto
          (DALL-E 3 e DALL-E 2)
        </li>
        <li>
          Criar versões editadas de imagens fazendo com que o modelo substitua
          algumas áreas de uma imagem pré-existente, com base em um novo prompt
          de texto (somente DOLA-E 2)
        </li>
        <li>Criar variações de uma imagem existente (somente DALL-E 2)</li>
      </ul>

      <Title2>Geração de Imagem</Title2>

      <Paragraph>
        O endpoint das gerações de imagens permite que você crie uma imagem
        original com um prompt de texto. Ao usar o DALL-E 3, as imagens podem
        ter um tamanho de 1024x1024, 1024x1792 ou 1792x1024 pixels.
      </Paragraph>

      <Paragraph>
        Por padrão, as imagens são geradas em na qualidade standard, mas ao usar
        DALL-E 3 você pode definir quality: "hd"para um detalhe melhorado.
        Imagens quadradas e de qualidade padrão são as mais rápidas de gerar.
      </Paragraph>

      <Paragraph>
        Você pode solicitar 1 imagem de cada vez com o DALL-E 3 (solicite mais
        fazendo solicitações paralelas) ou até 10 imagens de cada vez usando o
        DALL-E 2 com o parâmetro n.
      </Paragraph>
    </Slide>
  );
}
