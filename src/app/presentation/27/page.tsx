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

      <Title2>Gerenciamento de Imagens</Title2>

      <Paragraph>
        O API de Completions do Chat, ao contrário da API de Assistants, não é
        stateful (não mantém estado). Isso significa que você precisa gerenciar
        as mensagens (incluindo imagens) que você passa para o modelo por conta
        própria. Se você deseja passar a mesma imagem para o modelo várias
        vezes, você precisará enviar a imagem a cada vez que fizer uma
        solicitação à API.
      </Paragraph>

      <Paragraph>
        Para conversas longas em execução, sugerimos passar imagens via URLs em
        vez de base64. A latência do modelo também pode ser melhorada
        redimensionando suas imagens com antecedência para que sejam menores que
        o tamanho máximo esperado. Para o modo de baixa resolução, é esperado
        uma imagem de 512px x 512px. Para o modo de alta resolução, o lado curto
        da imagem deve ser inferior a 768px e o lado longo inferior a 2.000px.
      </Paragraph>

      <Paragraph>
        Após uma imagem ter sido processada pelo modelo, ela é excluída dos
        servidores da OpenAI e não é retida. Os dados enviados via API não são
        usados no terinamento dos modelos.
      </Paragraph>
    </Slide>
  );
}
