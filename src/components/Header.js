import Link from "next/link";
import headerStyles from "../styles/components/header.scss";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <nav
        className={headerStyles.nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link href="/">
          <h1>The Blog Title</h1>
        </Link>
        <div>
          <Link href={`${typeof window !== "undefined" &&
          window.location.pathname == "/info" ?
          "/" : "/info"}`}>
            <h1>{`${typeof window !== "undefined" &&
          window.location.pathname == "/info" ?
          "close" : "info"}`}</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}
