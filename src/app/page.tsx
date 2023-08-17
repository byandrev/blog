import Container from "@/components/Container";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hola, soy Andres Parra, Softwart Engineer
          </h1>

          <p>
            Soy un desarrollador de software apasionado por la tecnología y el
            desarrollo web. Me gusta siempre estar aprendiendo y compartiendo
            mis conocimientos, por eso existe este blog. Fan del open source y
            del café ☕.
          </p>

          <p>
            Cada línea de código es una oportunidad para crear magia y dar vida
            a ideas innovadoras.
          </p>
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "Andres Parra - Software Engineer | @byandrev",
  description:
    "Desarrollador de software apasionado por la tecnología y el desarrollo web. | Andres Parra - Software Engineer | @byandrev",
};
