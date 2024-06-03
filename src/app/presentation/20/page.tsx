"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { BsSoundwave } from "react-icons/bs";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
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

      <Title2>Introdução</Title2>

      <Paragraph>
        A API de Áudio fornece dois endpoints de reconhecimento de fala para
        texto, transcrições e traduções, baseados no modelo Whisper large-v2 de
        código aberto e ponta. Eles podem ser usados para:
      </Paragraph>

      <ul className="list-disc px-10 text-xl text-justify mt-4 text-gray-300">
        <li>Transcrever áudio para o idioma em que o áudio está.</li>
        <li>Traduzir e transcrever o áudio para o inglês.</li>
      </ul>

      <Paragraph>
        Atualmente, uploads de arquivos são limitados a 25 MB e os seguintes
        tipos de arquivos de entrada são suportados: mp3, mp4, mpeg, mpga, m4a,
        wav e webm.
      </Paragraph>

      <Paragraph>
        Se você tiver um arquivo de áudio que seja mais longo que isso, será
        necessário dividi-lo em partes de 25 MB ou menos, ou usar um formato de
        áudio comprimido. Para obter o melhor desempenho, sugerimos evitar
        dividir o áudio no meio de uma frase, pois isso pode causar perda de
        contexto.
      </Paragraph>

      <Title2>Timestamps</Title2>

      <Paragraph>
        Por padrão, a API Whisper da OpenAI produzirá uma transcrição do áudio
        fornecido em texto. O parâmetro timestamp_granularities[] possibilita um
        formato de saída JSON mais estruturado e com timestamps, oferecendo
        precisão em nível de segmento, palavra ou ambos. Isso permite uma
        precisão ao nível das palavras para transcrições e edições de vídeo, o
        que permite a remoção de frames específicos associados a palavras
        individuais.
      </Paragraph>
    </Slide>
  );
}
