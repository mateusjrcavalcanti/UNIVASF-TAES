"use client";

import useGlobalDOMEvents from "@/hooks/useGlobalDOMEvents";
import { usePathname, useRouter } from "next/navigation";

import "react-medium-image-zoom/dist/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const slideNumber = Number(pathname.split("/").pop());

  const handleKeyDown = (ev: Event) => {
    if (ev instanceof KeyboardEvent) {
      if (ev.key === "ArrowRight") {
        router.push(`/presentation/${slideNumber + 1}`);
      } else if (ev.key === "ArrowLeft" && slideNumber > 1) {
        router.push(`/presentation/${slideNumber - 1}`);
      }
    }
  };

  useGlobalDOMEvents({ keydown: handleKeyDown });
  return (
    <main className="bg-[#202123] text-white min-h-screen flex flex-col">
      <div className="container flex justify-center flex-grow mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {children}
      </div>
    </main>
  );
}
