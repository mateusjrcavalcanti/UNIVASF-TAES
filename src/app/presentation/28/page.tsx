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

      <Title2>Limitações</Title2>

      <Paragraph>
        Embora o GPT-4 com visão seja poderoso e possa ser usado em muitas
        situações, é importante entender as limitações do modelo. Aqui estão
        algumas das limitações conhecidas:
      </Paragraph>

      <ul className="list-disc px-10 text-xl text-justify mt-4 text-gray-300">
        <li>
          Imagens médicas: O modelo não é adequado para interpretar imagens
          médicas especializadas, como tomografias computadorizadas (CT), e não
          deve ser usado para aconselhamento médico.
        </li>
        <li>
          Não em inglês: O modelo pode não ter um desempenho ideal ao lidar com
          imagens com texto de alfabetos não latinos, como japonês ou coreano.
        </li>
        <li>
          Texto pequeno: Amplie o texto dentro da imagem para melhorar a
          legibilidade, mas evite recortar detalhes importantes.
        </li>
        <li>
          Rotação: O modelo pode interpretar incorretamente texto ou imagens
          giradas ou de cabeça para baixo.
        </li>
        <li>
          Elementos visuais: O modelo pode ter dificuldades para entender
          gráficos ou texto onde cores ou estilos como linhas sólidas,
          tracejadas ou pontilhadas variam.
        </li>
        <li>
          Raciocínio espacial: O modelo enfrenta dificuldades com tarefas que
          exigem localização espacial precisa, como identificar posições de
          peças de xadrez.
        </li>
        <li>
          Precisão: O modelo pode gerar descrições ou legendas incorretas em
          certos cenários.
        </li>
        <li>
          Forma da imagem: O modelo tem dificuldades com imagens panorâmicas e
          olho de peixe.
        </li>
        <li>
          Metadados e redimensionamento: O modelo não processa nomes de arquivos
          originais ou metadados, e as imagens são redimensionadas antes da
          análise, afetando suas dimensões originais
        </li>
        <li>
          Contagem: Pode fornecer contagens aproximadas de objetos em imagens.
        </li>
        <li>
          CAPTCHAs: Por motivos de segurança, foi implementado um sistema para
          bloquear o envio de CAPTCHAs.
        </li>
      </ul>

      <Paragraph>
        Essas limitações devem ser consideradas ao usar o GPT-4 com visão,
        garantindo que o modelo seja aplicado em contextos apropriados e que as
        expectativas estejam alinhadas com suas capacidades atuais.
      </Paragraph>
    </Slide>
  );
}
