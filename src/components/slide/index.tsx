/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import Zoom from "react-medium-image-zoom";

export function Slide({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>;
}

export function Title1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold sm:text-4xl text-center">{children}</h1>
  );
}

export function Title2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-2xl font-bold sm:text-3xl text-start">
      {children}
    </h2>
  );
}

export function TitleWithElement({
  classname,
  children,
  title,
  flex,
}: {
  classname?: string;
  children: React.ReactNode;
  title: string;
  flex?: boolean;
}) {
  return (
    <div
      className={cn([
        "justify-center items-center align-middle",
        flex && "flex",
        classname,
      ])}
    >
      {children}
      <h1 className="text-3xl font-bold sm:text-4xl text-center">{title}</h1>
    </div>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-xl text-justify mt-4 text-gray-300">{children}</p>;
}

export function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      {children}
    </div>
  );
}

export function Gallery({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      {images.map((image) => (
        <Zoom key={image.alt}>
          <div className="text-center">{image.alt}</div>
          <img src={image.src} width="300" alt={image.alt} />
        </Zoom>
      ))}
    </div>
  );
}
