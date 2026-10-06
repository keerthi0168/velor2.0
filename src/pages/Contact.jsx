import { useState } from "react";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    data.append("subject", "New Velor enquiry");
    data.append("from_name", "Velor Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        console.log("Web3Forms error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.log("Network error:", err);
      setStatus("error");
    }
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
        {status === "sent" ? (
          <h2 className="big">GOT IT.<br />WE'LL BE IN TOUCH.</h2>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <label>NAME<input type="text" name="name" required /></label>
            <label>EMAIL<input type="email" name="email" required /></label>
            <label>COMPANY / BRAND<input type="text" name="company" /></label>
            <label>WHAT DO YOU NEED?<input type="text" name="need" /></label>
            <label>TELL US ABOUT YOUR PROJECT<textarea name="message" rows="5" required /></label>

            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            <button type="submit" className="btn" disabled={status === "sending"}>
              {status === "sending" ? "SENDING..." : "SEND IT →"}
            </button>
            {status === "error" && (
              <p style={{ color: "#ff6b6b" }}>Something went wrong. Please try again or email us directly.</p>
            )}
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