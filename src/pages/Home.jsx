import PageTransition from "../components/PageTransition";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Attention from "../sections/Attention";
import Work from "../sections/Work";
import FinalCTA from "../sections/FinalCTA";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <Attention />
      <Work />
      <FinalCTA />
    </PageTransition>
  );
}
