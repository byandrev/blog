import Image from "next/image";

import Container from "@/components/Container";

function Home() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hola, soy Junior Software Engineer. Me encanta trabajar con
            Javascript y React.js. Me gusta aprender y compartir.
          </h1>
          <p>
            Me gusta siempre estar aprendiendo y compartir mis conocimientos,
            por eso existe este blog. Me considero fan del open source y del
            café ☕.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Home;
