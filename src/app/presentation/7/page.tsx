"use client";
import { Paragraph, Slide, TitleWithElement } from "@/components/slide";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

/* eslint-disable react/no-unescaped-entities */
export default function Slide7() {
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

      <Paragraph>
        Os modelos de geração de texto da OpenAI (muitas vezes chamados de
        transformadores generativos pré-treinados ou modelos de linguagem de
        grande porte) foram treinados para entender a linguagem natural, o
        código e as imagens.
      </Paragraph>
      <Paragraph>
        Os modelos fornecem saídas de texto em resposta às suas entradas. As
        entradas de texto para esses modelos também são referidas como
        "prompts". Projetar um prompt é essencialmente como você “programa” um
        modelo de linguagem grande, geralmente fornecendo instruções ou alguns
        exemplos de como concluir uma tarefa com sucesso.
      </Paragraph>
      <Paragraph>
        Usando os modelos de geração de texto do OpenAI, você pode criar
        aplicativos para:
        <ul className="list-disc px-10">
          <li>Esboço de documentos</li>
          <li>Escreva o código do computador</li>
          <li>Responda perguntas sobre uma base de conhecimento</li>
          <li>Analise textos</li>
          <li>Dê ao software uma interface de linguagem natural</li>
          <li>Tutor em uma variedade de assuntos</li>
          <li>Traduzir idiomas</li>
          <li>Simular personagens para jogos</li>
        </ul>
      </Paragraph>
      <Paragraph>
        Para usar um desses modelos por meio da API OpenAI, você enviará uma
        solicitação para a API Chat Completions contendo as entradas e sua chave
        de API e receberá uma resposta contendo a saída do modelo.
      </Paragraph>
    </Slide>
  );
}
