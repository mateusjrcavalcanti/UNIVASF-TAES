/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { useOpenAI } from "../OpenAIContext";
import { Code } from "@/components/code";
import { TiMicrophoneOutline } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Transcription } from "openai/resources/audio/transcriptions.mjs";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  const [transcription, setTranscription] = useState<Transcription>();
  useEffect(() => {
    console.log(transcription);
  }, [transcription]);

  const { openai } = useOpenAI();
  return (
    <Slide>
      <TitleWithElement title="Fala para texto" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#ef4146] to-[#c73136]"
          }
        >
          {<BsSoundwave size={24} />}
        </span>
      </TitleWithElement>

      <Title2>Idiomas Suportados</Title2>

      <Paragraph>
        Atualmente, são suportados os seguintes idiomas nos endpoints de
        transcrições e traduções:
      </Paragraph>

      <Paragraph>
        Afrikaans, Árabe, Armênio, Azerbaijano, Bielorrusso, Bósnio, Búlgaro,
        Catalão, Chinês, Croata, Tcheco, Dinamarquês, Holandês, Inglês,
        Estoniano, Finlandês, Francês, Galego, Alemão, Grego, Hebraico, Hindi,
        Húngaro, Islandês, Indonésio, Italiano, Japonês, Kannada, Cazaque,
        Coreano, Letão, Lituano, Macedônio, Malaio, Marathi, Maori, Nepali,
        Norueguês, Persa, Polonês, Português, Romeno, Russo, Sérvio, Eslovaco,
        Esloveno, Espanhol, Suaíli, Sueco, Tagalo, Tâmil, Tailandês, Turco,
        Ucraniano, Urdu, Vietnamita e Galês.
      </Paragraph>

      <Paragraph>
        Embora o modelo subjacente tenha sido treinado em 98 idiomas, listamos
        apenas os idiomas que alcançaram uma taxa de erro de palavra (WER)
        inferior a 50%, que é um benchmark padrão da indústria para a precisão
        de modelos de fala para texto. O modelo retornará resultados para
        idiomas não listados acima, mas a qualidade será baixa.
      </Paragraph>
    </Slide>
  );
}
