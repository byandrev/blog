import Container from "@/components/Container";
import Link from "./Link";

function Footer() {
  return (
    <footer className="py-6 text-sm mt-10">
      <Container>
        <div className="flex justify-between">
          <p>Desarrollado con 💙</p>

          <p>
            <Link href="https://github.com/byandrev/blog" target="_blank">
              Github
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
