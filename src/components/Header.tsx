import Container from "@/components/Container";
import Link from "next/link";

function Header() {
  return (
    <header className="py-6 mb-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">Sobre mí</Link>
          <Link href="/posts">Artículos</Link>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
