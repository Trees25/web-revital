import Image from "next/image";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";

const items = [
    {
        src: "/diagnostico/1.jpg",
        titulo: "Paso 1: Evaluación inicial",
        descripcion: "Breve explicación de qué se ve en esta imagen.",
    },
    {
        src: "/diagnostico/2.jpg",
        titulo: "Paso 2: Análisis",
        descripcion: "Breve explicación de qué se ve en esta imagen.",
    },
    {
        src: "/diagnostico/3.jpg",
        titulo: "Paso 3: Plan a medida",
        descripcion: "Breve explicación de qué se ve en esta imagen.",
    },
];

export function Diagnostico() {
    return (
        <section className="bg-ink px-4 py-20 text-paper">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="text-center text-3xl font-black md:text-5xl">
                        Así es tu <span className="text-brand">diagnóstico inicial</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-paper/70">
                        Esto es lo que vas a recibir en tu consultoría gratuita.
                    </p>
                </Reveal>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {items.map((item, i) => (
                        <Reveal key={item.src} delay={i * 0.1}>
                            <article className="group h-full overflow-hidden rounded-2xl border border-paper/10 bg-paper/5 transition hover:-translate-y-1 hover:border-brand/60">
                                <div className="overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.titulo}
                                        width={800}
                                        height={600}
                                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-brand">{item.titulo}</h3>
                                    <p className="mt-2 text-sm text-paper/70">{item.descripcion}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <CtaButton className="h-14 rounded-full px-8" />
                </div>
            </div>
        </section>
    );
}