/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { useOpenAI } from "../OpenAIContext";
import { Code } from "@/components/code";
import { TiMicrophoneOutline } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  const [input, setInput] = useState(
    "Esse audio foi gerado usando a api da OpenAI!"
  );

  const { openai } = useOpenAI();
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

      <Title2>Formatos de saída suportados</Title2>

      <Paragraph>
        O formato de resposta padrão é "mp3", mas outros formatos como "opus",
        "aac", "flac" e "pcm" estão disponíveis.
      </Paragraph>
      <ul className="list-disc px-10 text-xl text-justify mt-1 text-gray-300">
        <li>Opus: Para streaming e comunicação na internet, baixa latência.</li>
        <li>
          AAC: Para compressão de áudio digital, preferido pelo YouTube,
          Android, iOS.
        </li>
        <li>
          FLAC: Para compressão de áudio sem perda, favorecido por entusiastas
          de áudio para arquivamento.
        </li>
        <li>
          WAV: Áudio WAV não comprimido, adequado para aplicativos de baixa
          latência para evitar sobrecarga de decodificação.
        </li>
        <li>
          PCM: Semelhante ao WAV, mas contendo as amostras brutas em 24kHz (16
          bits assinado, low-endian), sem o cabeçalho.
        </li>
      </ul>

      <Title2>Idiomas suportados</Title2>

      <Paragraph>
        O modelo TTS geralmente segue o modelo Whisper em termos de suporte a
        idiomas. Whisper suporta os seguintes idiomas e apresenta bom
        desempenho, apesar de as vozes atuais serem otimizadas para o inglês:
      </Paragraph>

      <Paragraph>
        Africâner, Árabe, Armênio, Azerbaijano, Bielorrusso, Bósnio, Búlgaro,
        Catalão, Chinês, Croata, Tcheco, Dinamarquês, Holandês, Inglês,
        Estoniano, Finlandês, Francês, Galego, Alemão, Grego, Hebraico, Hindi,
        Húngaro, Islandês, Indonésio, Italiano, Japonês, Canarês, Cazaque,
        Coreano, Letão, Lituano, Macedônio, Malaio, Marata, Maori, Nepali,
        Norueguês, Persa, Polonês, Português, Romeno, Russo, Sérvio, Eslovaco,
        Esloveno, Espanhol, Suaíli, Sueco, Tagalo, Tâmil, Tailandês, Turco,
        Ucraniano, Urdu, Vietnamita e Galês.
      </Paragraph>
    </Slide>
  );
}
