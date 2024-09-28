import DiscoverHome from "@/components/Features/Landing/DiscoverHome";
import DiscoverProperty from "@/components/Features/Landing/DiscoverProperty";
import FindProperties from "@/components/Features/Landing/FindProperties";
import Innovative from "@/components/Features/Landing/Innovative";
import Questions from "@/components/Features/Landing/Questions";
import Simplify from "@/components/Features/Landing/Simplify";
import StartProject from "@/components/Features/Landing/StartProject";
import Testimonials from "@/components/Features/Landing/Testimonials";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`contianer ${sora.className}`}>
      <DiscoverHome />
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
