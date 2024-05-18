/* eslint-disable @next/next/no-img-element */
"use client";
import { SiAwssecretsmanager } from "react-icons/si";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { StreamLanguage } from "@codemirror/language";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { dracula } from "@uiw/codemirror-theme-dracula";

const extensions = [javascript({ jsx: true })];

/* eslint-disable react/no-unescaped-entities */
export default function Slide2() {
  return (
    <div className="flex justify-center">
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

        <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
          2. Instale o Node.js.
        </h2>

        <p className="text-xl text-justify mt-4 text-gray-300">
          Para baixar o Node.js, acesse o site oficial do Node e baixe a versão
          mais recente marcada como “LTS” (Long Term Support). Se estiver
          instalando o Node.js pela primeira vez, você pode seguir o guia
          oficial de uso do Node.js para começar.
        </p>

        <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
          3. Instale a biblioteca OpenAI Node.js.
        </h2>

        <CodeMirror
          className="mt-4"
          value={`npm install --save openai\n# or\nyarn add openai`}
          height="200px"
          theme={dracula}
          extensions={[StreamLanguage.define(shell)]}
        />
      </div>
      <div className="flex p-14 items-center">
        <SiAwssecretsmanager size={300} />
      </div>
    </div>
  );
}
