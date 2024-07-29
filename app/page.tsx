import DiscoverHome from "@/components/Features/landing/DiscoverHome";
import DiscoverProperty from "@/components/Features/landing/DiscoverProperty";
import FindProperties from "@/components/Features/landing/FindProperties";
import Innovative from "@/components/Features/landing/Innovative";
import Questions from "@/components/Features/landing/Questions";
import Simplify from "@/components/Features/landing/Simplify";
import StartProject from "@/components/Features/landing/StartProject";
import Testimonials from "@/components/Features/landing/Testimonials";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`contianer ${sora.className}`}>
      <div className="bg-[#F6F3F3]">
        <DiscoverHome />
      </div>
      <DiscoverProperty />
      <Simplify />
      <Innovative />
      <FindProperties />
      <Testimonials />
      <Questions />
      <StartProject />
    </main>
  );
}
