import Container from "@/components/Container";
import Link from "./Link";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <header className="py-6 mb-6">
      <Container>
        <nav className="flex justify-between">
          <div className="flex space-x-4 j">
            <Link href="/" color="text-inherit">
              Sobre mí
            </Link>
            <Link href="/posts" color="text-inherit">
              Artículos
            </Link>
          </div>

          <ThemeSwitch />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
