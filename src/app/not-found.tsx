/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname, useRouter } from "next/navigation";
import useGlobalDOMEvents from "@/hooks/useGlobalDOMEvents";

export default function NotFound() {
  const pathname = usePathname();
  if (pathname.startsWith("/presentation")) {
    const pageNumber = Number(pathname.split("/").pop());
    if (pageNumber && pageNumber > 0)
      return <EndPage slideNumber={pageNumber} />;
  }

  return <Astronaut />;
}

const Astronaut = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className="relative h-screen overflow-hidden bg-indigo-900">
      <img
        src="/landscape.svg"
        className="absolute object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-center w-full font-mono">
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
            {description ?? "You&#x27;re alone here"}
          </h1>
          <p className="font-extrabold text-white text-8xl my-44 animate-bounce">
            {title ?? "404"}
          </p>
        </div>
      </div>
    </div>
  );
};

const EndPage = ({ slideNumber }: { slideNumber: number }) => {
  const router = useRouter();

  const handleKeyDown = (ev: Event) => {
    if (
      ev instanceof KeyboardEvent &&
      ev.key === "ArrowLeft" &&
      slideNumber > 1
    ) {
      router.push(`/presentation/${slideNumber - 1}`);
    }
  };

  useGlobalDOMEvents({ keydown: handleKeyDown });

  return (
    <Astronaut
      title="Obrigado!"
      description="Eu finalmente vou descansar e ver o sol nascer em um universo agradecido. ~Thanos"
    />
  );
};
