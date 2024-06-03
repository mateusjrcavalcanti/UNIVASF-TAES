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

      <Title2>Introdução</Title2>

      <Paragraph>
        Tanto o GPT-4o quanto o GPT-4 Turbo possuem capacidades de visão, o que
        significa que os modelos podem receber imagens e responder perguntas
        sobre elas. Historicamente, os sistemas de modelos de linguagem eram
        limitados a uma única modalidade de entrada, o texto.
      </Paragraph>

      <Paragraph>
        O modelo desempenha melhor ao responder perguntas gerais sobre o que
        está presente nas imagens. Embora ele compreenda a relação entre objetos
        nas imagens, ainda não está otimizado para responder perguntas
        detalhadas sobre a localização de objetos específicos em uma imagem. Por
        exemplo, você pode perguntar qual é a cor de um carro ou quais são
        algumas ideias para o jantar com base no que está na sua geladeira, mas
        se você mostrar uma imagem de um quarto e perguntar onde está a cadeira,
        ele pode não responder corretamente.
      </Paragraph>
    </Slide>
  );
}
