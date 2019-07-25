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
          <Link href="/info">
            <h1>info</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}
