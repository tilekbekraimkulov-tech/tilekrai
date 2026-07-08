import { Suspense } from "react";
import Results from "./results";

export default function SearchPage() {
  return (
    <main className="searchpage">
      <Suspense>
        <Results />
      </Suspense>
    </main>
  );
}
