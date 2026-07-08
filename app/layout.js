import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Passes Help Center — redesign prototype",
  description: "One canonical help center: triage home, progressive search, recoverable articles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="hdr">
          <div className="wrap hdr-in">
            <Link className="logo" href="/">passes <span>/ help</span></Link>
            <nav>
              <Link href="/#fans">For fans</Link>
              <Link href="/#creators">For creators</Link>
              <Link href="/c/safety">Safety &amp; reporting</Link>
            </nav>
            <div className="status"><span className="dot" /> All systems operational</div>
          </div>
        </header>
        {children}
        <footer className="ftr">
          <div className="wrap in">
            <span>© Passes</span>
            <a href="/a/contact-support">Contact support</a>
            <a href="#">System status</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
