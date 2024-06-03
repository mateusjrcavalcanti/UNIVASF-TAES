/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Paragraph, Slide, Title2, TitleWithElement } from "@/components/slide";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useOpenAI } from "../OpenAIContext";
import { Code } from "@/components/code";

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <Slide>
      <TitleWithElement title="Geração de imagem" flex={true}>
        <span
          className={
            "shrink-0 rounded-lg p-4 mr-5 text-white bg-gradient-to-r from-[#fa7507] to-[#ff7300]"
          }
        >
          {<HiOutlinePhotograph size={24} />}
        </span>
      </TitleWithElement>

      <Title2>Edits (somente DALL-E 2)</Title2>

      <Paragraph>
        Também conhecido como "inpainting", o endpoint de edições de imagem
        permite editar ou estender uma imagem enviando uma imagem e uma máscara
        que indica quais áreas devem ser substituídas. As áreas transparentes da
        máscara indicam onde a imagem deve ser editada, e o prompt deve
        descrever a nova imagem completa, não apenas a área apagada.
      </Paragraph>

      <div className="pt-5">
        <Code
          language="javascript"
          value={TextGenerationCode()}
          editable={false}
        />
      </div>
    </Slide>
  );
}

const TextGenerationCode = () => {
  const { AuthCode } = useOpenAI();

  var code = AuthCode();
  code += `\n
async function main() {
  const completion = await openai.images.edit({
    model: "dall-e-2",
    image: fs.createReadStream("sunlit_lounge.png"),
    mask: fs.createReadStream("mask.png"),
    prompt: "A sunlit indoor lounge area with a pool containing a flamingo",
    n: 1,
    size: "1024x1024"
  });

  image_url = response.data[0].url;
}
main();
`;

  return code;
};
