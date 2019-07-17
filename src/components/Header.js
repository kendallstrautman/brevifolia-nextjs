import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
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
