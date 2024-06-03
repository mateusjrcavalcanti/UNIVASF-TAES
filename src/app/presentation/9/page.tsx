"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <Slide>
      <TitleWithElement title="Geração de texto" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#5436da] to-[#341c9c]"
          }
        >
          {<IoChatbubbleEllipsesOutline size={24} />}
        </span>
      </TitleWithElement>
      <Title2>Razões de encerramento</Title2>
      <Paragraph>
        Cada resposta incluirá a finish_reason, e seus valores possíveis são:
      </Paragraph>
      <ul className="list-disc px-10 text-xl text-justify text-gray-300">
        <li>
          stop: API retornou mensagem completa, ou uma mensagem terminada por
          uma das sequências de parada fornecidas através do parâmetro stop
        </li>
        <li>
          length: Saída incompleta do modelo devido a max_tokenslimite de
          parâmetro ou token
        </li>
        <li>function_call: O modelo decidiu chamar uma função</li>
        <li>
          content_filter: Conteúdo omitido devido a um sinalizador de nossos
          filtros de conteúdo
        </li>
        <li>Resposta null: API ainda em andamento ou incompleta</li>
      </ul>
      <Title2>Qual modelo devo usar?</Title2>
      <Paragraph>
        Para alta inteligência e raciocínio sobre imagens e texto, gpt-4o e
        gpt-4-turbo são ideais, com o gpt-4o sendo mais rápido e barato.
      </Paragraph>
      <Paragraph>
        Para maior velocidade e menor custo, use gpt-3.5-turbo.
      </Paragraph>
      <Paragraph>
        Gpt-4o e gpt-4-turbo são menos propensos a inventar informações e
        suportam mais tokens (128.000) comparado ao gpt-3.5-turbo (4.096
        tokens).
      </Paragraph>
    </Slide>
  );
}
