import { ItemWithIcon } from "@/components/ItemWithIcon";
import { Grid, Paragraph, Slide, Title1 } from "@/components/slide";

import { BsSoundwave } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TiMicrophoneOutline } from "react-icons/ti";

export default function Slide1() {
  return (
    <Slide>
      <Title1>Explorar a API da OpenAI</Title1>

      <Paragraph>
        A API da OpenAI é uma poderosa ferramenta que oferece acesso a diversos
        modelos de inteligência artificial para realizar uma variedade de
        tarefas. É uma plataforma versátil e eficaz para aplicar técnicas de IA
        em uma variedade de contextos.
      </Paragraph>

      <Grid>
        <ItemWithIcon
          iconClassName="bg-gradient-to-r from-[#5436da] to-[#341c9c]"
          title="Geração de texto"
          description="Produção de texto em resposta a entradas, utilizando 'prompts'."
          icon={<IoChatbubbleEllipsesOutline size={24} />}
        />
        <ItemWithIcon
          iconClassName="bg-gradient-to-r from-[#fa7507] to-[#ff7300]"
          title="Geração de imagem"
          description="Rera ou manipula imagens com DALL·E a partir de entradas de texto."
          icon={<HiOutlinePhotograph size={24} />}
        />
        <ItemWithIcon
          iconClassName="bg-gradient-to-r from-[#19c37d] to-[#13a065]"
          title="Texto para fala"
          description="Transforma texto em áudio falado"
          icon={<TiMicrophoneOutline size={24} />}
        />
        <ItemWithIcon
          iconClassName="bg-gradient-to-r from-[#ef4146] to-[#c73136]"
          title="Fala para texto"
          description="Transforma áudio em texto"
          icon={<BsSoundwave />}
        />
        <ItemWithIcon
          iconClassName="bg-gradient-to-r from-[#7719c3] to-[#9f4ae6]"
          title="Visão"
          description="Processa entradas de imagem com GPT-4"
          icon={<MdOutlineRemoveRedEye size={24} />}
        />
      </Grid>
    </Slide>
  );
}
