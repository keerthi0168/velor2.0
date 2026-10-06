import PageTransition from "../components/PageTransition";

const projects = [
  ["PROJECT 01", "Branding / Identity"],
  ["PROJECT 02", "Social Campaign"],
  ["PROJECT 03", "Advertising"],
  ["PROJECT 04", "Digital Experience"],
  ["PROJECT 05", "Motion"],
  ["PROJECT 06", "Content"],
];

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="label">SELECTED WORK</p>
        <h1>SEE WHAT WE'VE<br />BEEN MAKING.</h1>
        <p className="sub">Concept and self-initiated work will be clearly labelled.</p>
      </section>
      <section className="work">
        <div className="work-grid">
          {projects.map(([name, type]) => (
            <article className="project" key={name}>
              <span>{name}</span>
              <small>{type}</small>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
