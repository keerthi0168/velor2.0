import { useState } from "react";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // later: connect to Formspree / EmailJS / your backend
    setSent(true);
  };

  return (
    <PageTransition>
      <section className="page-hero">
        <p className="label">LET'S TALK</p>
        <h1>GOT SOMETHING<br />WORTH TALKING ABOUT?</h1>
        <p className="sub">
          Tell us what you're building, what you're trying to solve, or simply what you've been thinking about.
        </p>
      </section>

      <section className="contact">
        {sent ? (
          <h2 className="big">GOT IT.<br />WE'LL BE IN TOUCH.</h2>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <label>NAME<input type="text" required /></label>
            <label>EMAIL<input type="email" required /></label>
            <label>COMPANY / BRAND<input type="text" /></label>
            <label>WHAT DO YOU NEED?<input type="text" /></label>
            <label>TELL US ABOUT YOUR PROJECT<textarea rows="5" required /></label>
            <button type="submit" className="btn">SEND IT →</button>
          </form>
        )}

        <div className="final-statement">
          <h2 className="big">LET'S MAKE SOMETHING<br />PEOPLE REMEMBER.</h2>
          <p>hello@velor.com</p>
          <p className="socials">Instagram · LinkedIn · Behance</p>
        </div>
      </section>
    </PageTransition>
  );
}