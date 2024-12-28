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
        <Innovative />
      </Transition>

      <Transition>
        <FindProperties />
      </Transition>

      <Transition>
        <Testimonials />
        <Questions
          showFAQ={true}
          title={"Frequently Asked" + <br className="lg:hidden" /> + "Question"}
          subTitle="Did you find the question as you expected?"
          firstQuestionBody="Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo."
        />
      </Transition>

      <Transition>
        <StartProject />
      </Transition>
    </main>
  );
}
