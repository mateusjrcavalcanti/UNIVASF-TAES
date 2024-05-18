/* eslint-disable @next/next/no-img-element */
"use client";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { dracula } from "@uiw/codemirror-theme-dracula";

import Openai from "../../../../public/openai.svg";

/* eslint-disable react/no-unescaped-entities */
export default function Slide2() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold sm:text-4xl text-center">
          Etapas (NodeJS)
        </h1>

        <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
          1. Configuração da conta
        </h2>

        <p className="text-xl text-justify mt-4 text-gray-300">
          Primeiro, crie uma conta OpenAI ou faça login . Em seguida, navegue
          até a página da chave API e "Criar nova chave secreta", opcionalmente
          nomeando a chave. Certifique-se de salvar em algum lugar seguro e não
          compartilhe com ninguém.
        </p>

        <div className="grid grid-cols-4 gap-4 mt-5">
          <Zoom>
            <div className="text-center">Project API keys</div>
            <img
              alt="Project API keys"
              src="/etapas/ApiKeysEmpty.jpeg"
              width="300"
            />
          </Zoom>
          <Zoom>
            <div className="text-center">Create new secret key</div>
            <img
              alt="Create new secret key"
              src="/etapas/CreateNewSecret.jpeg"
              width="300"
            />
          </Zoom>
          <Zoom>
            <div className="text-center">Save your key</div>
            <img alt="Save your key" src="/etapas/CopyKey.jpeg" width="300" />
          </Zoom>
          <Zoom>
            <div className="text-center">Project API keys</div>
            <img
              alt="Project API keys"
              src="/etapas/ApiKeys.jpeg"
              width="300"
            />
          </Zoom>
        </div>
      </div>
      <div className="flex p-14 items-center">
        <Openai width={300} fill="#23a27d" />
      </div>
    </>
  );
}
