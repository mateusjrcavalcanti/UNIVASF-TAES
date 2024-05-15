"use client";

import useGlobalDOMEvents from "@/hooks/useGlobalDOMEvents";
import { usePathname, useRouter } from "next/navigation";

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
      } else if (ev.key === "ArrowLeft") {
        router.push(`/presentation/${slideNumber - 1}`);
      }
    }
  };

  useGlobalDOMEvents({ keydown: handleKeyDown });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}
