export default function Loader({ lang }: { lang: string }) {
  return (
    <p className="text-center">{lang === "en" ? "Loading" : "Cargando"} ...</p>
  );
}
