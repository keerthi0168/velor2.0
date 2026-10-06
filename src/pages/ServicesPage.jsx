import PageTransition from "../components/PageTransition";
import Services from "../sections/Services";
import FinalCTA from "../sections/FinalCTA";

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="label">WHAT WE DO</p>
        <h1>FROM AN IDEA<br />TO SOMETHING<br />PEOPLE NOTICE.</h1>
      </section>
      <Services />
      <FinalCTA />
    </PageTransition>
  );
}
