/* eslint-disable @next/next/no-img-element */
"use client";
import Openai from "../../../../public/openai.svg";
import {
  Gallery,
  Paragraph,
  Slide,
  Title2,
  TitleWithElement,
} from "@/components/slide";

/* eslint-disable react/no-unescaped-entities */
export default function Slide3() {
  return (
    <Slide>
      <TitleWithElement title="Etapas (NodeJS)">
        <Openai className="mx-auto mb-5" width={100} fill="#23a27d" />
      </TitleWithElement>
      <Title2>1. Configuração da conta</Title2>
      <Paragraph>
        Primeiro, crie uma conta OpenAI ou faça login . Em seguida, navegue até
        a página da chave API e "Criar nova chave secreta", opcionalmente
        nomeando a chave. Certifique-se de salvar em algum lugar seguro e não
        compartilhe com ninguém.
      </Paragraph>
      <Gallery
        images={[
          {
            src: "/etapas/ApiKeysEmpty.jpeg",
            alt: "Project API keys",
          },
          {
            src: "/etapas/CreateNewSecret.jpeg",
            alt: "Create new secret key",
          },
          {
            src: "/etapas/CopyKey.jpeg",
            alt: "Save your key",
          },
          {
            src: "/etapas/ApiKeys.jpeg",
            alt: "Project API keys",
          },
        ]}
      />
    </Slide>
  );
}
