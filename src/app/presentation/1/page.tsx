import { ItemWithIcon } from "@/components/ItemWithIcon";
import { BsSoundwave } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TiMicrophoneOutline } from "react-icons/ti";

export default function Slide1() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold sm:text-4xl text-center">
          Explorar a API da OpenAI
        </h2>

        <p className="mt-4 text-gray-300">
          A API da OpenAI é uma poderosa ferramenta que oferece acesso a
          diversos modelos de inteligência artificial para realizar uma
          variedade de tarefas. É uma plataforma versátil e eficaz para aplicar
          técnicas de IA em uma variedade de contextos.
        </p>
      </div>

      <div className="mx-auto max-w-4xl mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        <ItemWithIcon
          iconClassName="bg-gradient-to-r from-[#5436da] to-[#341c9c]"
          title="Geração de texto"
          description="Produção de texto em resposta a entradas, utilizando 'prompts'."
          icon={<IoChatbubbleEllipsesOutline size={24} />}
        />
        <ItemWithIcon
          iconClassName="bg-gradient-to-r from-[#5436da] to-[#341c9c]"
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
          iconClassName="bg-gradient-to-r from-[#19c37d] to-[#13a065]"
          title="Visão"
          description="Processa entradas de imagem com GPT-4"
          icon={<MdOutlineRemoveRedEye size={24} />}
        />
      </div>
    </div>
  );
}
