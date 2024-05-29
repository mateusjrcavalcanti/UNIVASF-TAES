/* eslint-disable react/no-unescaped-entities */
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { FcKey } from "react-icons/fc";

export default function Slide2() {
  return (
    <Slide>
      <TitleWithElement title="Conceitos chave" flex={true}>
        <FcKey size={50} />
      </TitleWithElement>
      <Title2>Modelos de geração de texto</Title2>
      <Paragraph>
        Os modelos de geração de texto da OpenAI (muitas vezes chamados de
        transformadores generativos pré-treinados ou modelos "GPT"), como GPT-4
        e GPT-3.5, foram treinados para compreender a linguagem natural e
        formal. Modelos como o GPT-4 permitem saídas de texto em resposta às
        suas entradas. As entradas para esses modelos também são chamadas de
        “prompts”. Projetar um prompt é essencialmente como você "programa" um
        modelo como o GPT-4, geralmente fornecendo instruções ou alguns exemplos
        de como concluir uma tarefa com êxito. Modelos como o GPT-4 podem ser
        usados ​​em uma grande variedade de tarefas, incluindo geração de
        conteúdo ou código, resumo, conversação, redação criativa e muito mais.
        Leia mais em nosso guia introdutório de geração de texto e em nosso guia
        de engenharia imediata .
      </Paragraph>
      <Title2>Tokens</Title2>
      <Paragraph>
        Os modelos de geração e incorporação de texto processam o texto em
        pedaços chamados tokens. Os tokens representam sequências de caracteres
        que ocorrem comumente. Por exemplo, a string "tokenization" é decomposta
        como "token" e "ization", enquanto uma palavra curta e comum como "the"
        é representada como um único token. Observe que em uma frase, o primeiro
        token de cada palavra normalmente começa com um caractere de espaço.
        Confira nossa ferramenta tokenizer para testar strings específicas e ver
        como elas são traduzidas em tokens. Como regra geral, 1 token tem
        aproximadamente 4 caracteres ou 0,75 palavras para texto em inglês. Uma
        limitação a ter em mente é que, para um modelo de geração de texto, o
        prompt e a saída gerada combinados não devem exceder o comprimento
        máximo de contexto do modelo. Para modelos de incorporação (que não
        geram tokens), a entrada deve ser menor que o comprimento máximo de
        contexto do modelo. Os comprimentos máximos de contexto para cada modelo
        de geração de texto e incorporação podem ser encontrados no índice do
        modelo .
      </Paragraph>
    </Slide>
  );
}
