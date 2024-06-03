"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <Slide>
      <TitleWithElement title="Geração de texto" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#5436da] to-[#341c9c]"
          }
        >
          {<IoChatbubbleEllipsesOutline size={24} />}
        </span>
      </TitleWithElement>

      <Title2>Como devo configurar o parâmetro de temperatura?</Title2>

      <Paragraph>
        Valores mais baixos para a temperatura resultam em saídas mais
        consistentes (por exemplo, 0.2), enquanto valores mais altos geram
        resultados mais diversos e criativos (por exemplo, 1.0). Selecione um
        valor de temperatura com base na troca desejada entre coerência e
        criatividade para sua aplicação específica. A temperatura pode variar de
        0 a 2.
      </Paragraph>

      <Title2>Os dados enviados para a API são armazenados?</Title2>

      <Paragraph>
        A partir de 1º de março de 2023, a OpenAI retem seus dados da API por 30
        dias, mas não usam mais os dados enviados via API para melhorar seus
        modelos. Saiba mais na política de uso de dados. Alguns endpoints
        oferecem retenção zero.
      </Paragraph>
    </Slide>
  );
}
