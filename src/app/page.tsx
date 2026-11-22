import { Hero } from "@/components/sections/Hero";
import { VideoPresentacion } from "@/components/sections/VideoPresentacion";
import { Testimonios } from "@/components/sections/Testimonios";
import { Diagnostico } from "@/components/sections/Diagnostico";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { casosPrincipales, casosFinales } from "@/data/testimonios";

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <Hero />
      <VideoPresentacion />
      <Testimonios titulo="Casos de éxito" items={casosPrincipales} />
      <Diagnostico />
      <Faq />
      <Testimonios titulo="Lo que dicen nuestros clientes" items={casosFinales} oscuro />
      <Footer />
    </main>
  );
}