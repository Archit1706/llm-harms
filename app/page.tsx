import Image from "next/image";
import Link from "next/link";
import Chat from "../components/Chat";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-6 max-w-full gap-4">
      <div className="flex flex-row items-center justify-around z-10 w-full max-w-5xl font-mono text-sm lg:flex gap-2">
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-r from-slate-900 to-slate-700 backdrop-blur-2xl font-bold text-base dark:border-neutral-800 lg:static lg:w-auto rounded-xl lg:border p-4">
          LLM Harms
          {/* &nbsp; */}
          {/* <Link href="https://debdonig.com/professional/">
            <code className="font-mono font-bold">Dr. Deb Donig</code>
          </Link> */}
        </p>
        <div className="flex rounded-xl w-fit items-end justify-center bg-gradient-to-r from-slate-200 to-slate-400 lg:static lg:rounded-xl lg:border lg:p-1 lg:h-auto lg:w-auto text-black text-md font-bold">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-1 lg:pointer-events-auto lg:p-0"
            href="https://simppl.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/simppl_wbg.png"
              alt="SimPPL Logo"
              width={150}
              height={40}
              priority
            />
          </a>
        </div>
      </div>

      <Chat />
      <Footer />
    </main>
  );
}
