"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { TiMicrophoneOutline } from "react-icons/ti";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <Slide>
      <TitleWithElement title="Texto para fala" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#19c37d] to-[#13a065]"
          }
        >
          {<TiMicrophoneOutline size={24} />}
        </span>
      </TitleWithElement>

      <Title2>Introdução</Title2>

      <Paragraph>
        A API de áudio fornece um speechendpoint baseado no nosso modelo TTS
        (text-to-speech). Ele vem com 6 vozes embutidas e pode ser usado para:
      </Paragraph>

      <ul className="list-disc px-10 text-xl text-justify mt-4 text-gray-300">
        <li>Narrar uma postagem de blog escrita</li>
        <li>Produzir áudio falado em vários idiomas</li>
        <li>Fornecer saída de áudio em tempo real usando streaming</li>
      </ul>

      <Title2>Posso criar uma cópia personalizada da minha própria voz?</Title2>

      <Paragraph>Não, isso não é algo que a API suporta.</Paragraph>

      <Title2>Atenção</Title2>

      <Paragraph>
        A pessoa que criou os audios é a proprietária da saída. Mas observe que
        as políticas de uso exigem que você forneça uma divulgação clara aos
        usuários finais de que a voz do TTS que eles estão ouvindo é gerada por
        IA e não uma voz humana.
      </Paragraph>
    </Slide>
  );
}
