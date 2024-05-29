/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import NodeJS from "../../../../public/nodejs.svg";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Code } from "@/components/code";
import { FcLinux } from "react-icons/fc";
import { BiLogoWindows } from "react-icons/bi";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";

export default function Slide4() {
  return (
    <Slide>
      <TitleWithElement title="Etapas (NodeJS)">
        <NodeJS className="mx-auto mb-5" />
      </TitleWithElement>

      <Title2> 2. Instale o Node.js.</Title2>

      <Paragraph>
        Para baixar o Node.js, acesse o site oficial do Node e baixe a versão
        mais recente marcada como “LTS” (Long Term Support). Se estiver
        instalando o Node.js pela primeira vez, você pode seguir o guia oficial
        de uso do Node.js para começar.
      </Paragraph>

      <TabsNode />
    </Slide>
  );
}

function TabsNode() {
  return (
    <Tabs defaultValue="linux">
      <TabsList className="flex my-5">
        <TabsTrigger
          className="flex items-center mx-auto py-2 px-4 bg-white rounded-xl text-black text-lg font-bold"
          value="linux"
        >
          <FcLinux size={30} className="mr-1" /> Linux
        </TabsTrigger>
        <TabsTrigger
          className="flex items-center mx-auto py-2 px-4 bg-white rounded-xl text-black text-lg font-bold"
          value="windows"
        >
          <BiLogoWindows size={30} className="mr-1" /> Windows
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
            <Code language="shell" value={linuxCode} editable={false} />
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
            <Code language="shell" value={windowsCode} editable={false} />
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
