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

      <Title2>Imagem de Baixa ou Alta Fidelidade</Title2>

      <Paragraph>
        Ao controlar o parâmetro de detalhes, que possui três opções (low, high
        ou auto), você tem controle sobre como o modelo processa a imagem e gera
        sua compreensão textual. Por padrão, o modelo utilizará a configuração
        automática (auto), que analisa o tamanho da entrada da imagem e decide
        se deve usar a configuração de baixa ou alta qualidade.
      </Paragraph>

      <ul className="list-disc px-10 text-xl text-justify mt-4 text-gray-300">
        <li>
          low (baixo): Ativa o modo "baixa resolução". O modelo recebe uma
          versão de baixa resolução de 512px x 512px da imagem e representa a
          imagem com um orçamento de 85 tokens. Isso permite que a API retorne
          respostas mais rápidas e consuma menos tokens de entrada para casos de
          uso que não requerem alta detalhamento.
        </li>
        <li>
          high (alto): Ativa o modo "alta resolução", que primeiro permite ao
          modelo ver a imagem de baixa resolução (usando 85 tokens) e depois
          cria recortes detalhados usando 170 tokens para cada bloco de 512px x
          512px.
        </li>
      </ul>

      <Paragraph>
        Essas configurações permitem ajustar como o modelo processa as imagens,
        otimizando para diferentes requisitos de aplicação, desde respostas
        rápidas e eficientes até detalhamentos complexos de alta qualidade.
      </Paragraph>
    </Slide>
  );
}
