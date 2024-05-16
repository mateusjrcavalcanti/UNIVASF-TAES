/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-indigo-900">
      <img
        src="/background.svg"
        className="absolute object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-25"></div>

      <div className="flex flex-col justify-around h-full container relative z-10 items-center px-6 pt-6 mx-auto md:px-4 xl:pt-16">
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
            Desenvolvimento de Software com a API openAI
          </h1>
          <Link
            href="/presentation/1"
            className="block rounded-lg px-6 py-5 mt-10 text-xl font-bold text-white uppercase bg-gray-800 hover:bg-white hover:text-gray-800"
          >
            Start Now
          </Link>
        </div>

        <Team />
      </div>
    </div>
  );
}
