/* eslint-disable @next/next/no-img-element */
"use client";
import "react-medium-image-zoom/dist/styles.css";

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { dracula } from "@uiw/codemirror-theme-dracula";

import Openai from "../../../../public/openai.svg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

/* eslint-disable react/no-unescaped-entities */
export default function Slide2() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold sm:text-4xl text-center">
          Etapas (NodeJS)
        </h1>

        <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
          2. Instale o Node.js.
        </h2>

        <p className="text-xl text-justify mt-4 text-gray-300">
          Para baixar o Node.js, acesse o site oficial do Node e baixe a versão
          mais recente marcada como “LTS” (Long Term Support). Se estiver
          instalando o Node.js pela primeira vez, você pode seguir o guia
          oficial de uso do Node.js para começar.
        </p>

        <TabsNode />
      </div>
      <div className="flex p-14 items-center">
        <Openai width={300} fill="#23a27d" />
      </div>
    </>
  );
}

function TabsNode() {
  return (
    <Tabs defaultValue="linux">
      <TabsList className="flex my-5">
        <TabsTrigger
          className="mx-auto py-2 px-4 bg-white rounded-xl text-black text-lg font-bold"
          value="linux"
        >
          Linux
        </TabsTrigger>
        <TabsTrigger
          className="mx-auto py-2 px-4 bg-white rounded-xl text-black text-lg font-bold"
          value="windows"
        >
          Windows
        </TabsTrigger>
      </TabsList>
      <TabsContent value="linux">
        <Card className="bg-transpatent border-none">
          <CardHeader>
            <CardTitle className="text-white ">
              Instalando o Node.js no Linux
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeMirror
              value={linuxCode}
              theme={dracula}
              extensions={[StreamLanguage.define(shell)]}
              editable={false}
              autoFocus={false}
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="windows">
        <Card className="bg-transpatent border-none">
          <CardHeader>
            <CardTitle className="text-white ">
              Instalando o Node.js no Windows
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeMirror
              value={windowsCode}
              theme={dracula}
              extensions={[StreamLanguage.define(shell)]}
              editable={false}
              autoFocus={false}
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

const linuxCode = `# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js
nvm install 20
# verifies the right Node.js version is in the environment
node -v # should print \`v20.13.1\`
# verifies the right NPM version is in the environment
npm -v # should print \`10.5.2\``;

const windowsCode = `# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print \`v20.13.1\`

# verifies the right NPM version is in the environment
npm -v # should print \`10.5.2\``;
