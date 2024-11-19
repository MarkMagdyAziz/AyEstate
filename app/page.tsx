import DiscoverHome from "@/components/Features/landing/DiscoverHome";
import DiscoverProperty from "@/components/Features/landing/DiscoverProperty";
import FindProperties from "@/components/Features/landing/FindProperties";
import Innovative from "@/components/Features/landing/Innovative";
import Questions from "@/components/Features/landing/Questions";
import Simplify from "@/components/Features/landing/Simplify";
import StartProject from "@/components/Features/landing/StartProject";
import Testimonials from "@/components/Features/landing/Testimonials";
import { Sora } from "next/font/google";
import Transition from "./transation";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`contianer ${sora.className}`}>
      <DiscoverHome />
      <Transition>
        <DiscoverProperty />
      </Transition>

      <Transition>
        <Simplify />
      </Transition>

      <Innovative />

      <Transition>
        <FindProperties />
      </Transition>

      <Transition>
        <Testimonials />
      </Transition>

      <Questions />

      <Transition>
        <StartProject />
      </Transition>
    </main>
  );
}
