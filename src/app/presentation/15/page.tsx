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

      <Title2>Variações (somente DALL-E 2)</Title2>
      <Paragraph>
        O endpoint de variações de imagem permite gerar uma variação de uma
        determinada imagem.
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
    image: fs.createReadStream("corgi_and_cat_paw.png"),
    n: 1,
    size: "1024x1024"
  });

  image_url = response.data[0].url;
}
main();
`;

  return code;
};
