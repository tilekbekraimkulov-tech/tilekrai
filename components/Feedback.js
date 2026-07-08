"use client";
import { useState } from "react";

export default function Feedback() {
  const [state, setState] = useState(null);
  return (
    <div className="feedback">
      {state === null && (
        <>
          <div className="q">Was this article helpful?</div>
          <div className="btns">
            <button onClick={() => setState("yes")}>Yes</button>
            <button onClick={() => setState("no")}>No</button>
          </div>
        </>
      )}
      {state === "yes" && <div className="thanks">Thanks — glad it helped.</div>}
      {state === "no" && (
        <>
          <div className="thanks" style={{ color: "var(--ink)" }}>Sorry about that.</div>
          <p className="escalate">
            Tell us what was missing, or <a href="/a/contact-support">contact support</a> — a human replies within one business day.
          </p>
        </>
      )}
    </div>
  );
}
