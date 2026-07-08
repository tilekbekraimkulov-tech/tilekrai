"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox({ defaultValue = "", autoFocus = false }) {
  const [q, setQ] = useState(defaultValue);
  const router = useRouter();
  const go = () => router.push(q.trim() ? `/search?q=${encodeURIComponent(q.trim())}` : "/search");
  return (
    <div className="search">
      <input
        aria-label="Search help articles"
        placeholder="Search — try “refund”, “cancel”, “password”…"
        value={q}
        autoFocus={autoFocus}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
      />
      <button onClick={go}>Search</button>
    </div>
  );
}
