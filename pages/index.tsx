import Image from "next/image";
import { Inter } from "next/font/google";
import {Sora} from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Discover from "@/components/Features/Discover";
//  import {Playball} from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`contianer bg-[#F6F3F3] ${sora.className}`}
    >
      <Discover/>
    </main>
  );
}
