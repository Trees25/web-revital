import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";
import { IconEvaluacion, IconAnalisis, IconPlan } from "../DiagnosticoIcons";

const items = [
    {
        Icon: IconEvaluacion,
        titulo: "Paso 1: Evaluación inicial",
        descripcion: "Breve explicación de qué se ve en esta imagen.",
    },
    {
        Icon: IconAnalisis,
        titulo: "Paso 2: Análisis",
        descripcion: "Breve explicación de qué se ve en esta imagen.",
    },
    {
        Icon: IconPlan,
        titulo: "Paso 3: Plan a medida",
        descripcion: "Breve explicación de qué se ve en esta imagen.",
    },
];

export function Diagnostico() {
    return (
        <section className="bg-ink px-4 py-20 text-paper">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="text-center text-xl font-black md:text-4xl">
                        Así es tu <span className="text-brand">diagnóstico inicial</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-paper/70">
                        Esto es lo que vas a recibir en tu consultoría gratuita.
                    </p>
                </Reveal>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {items.map(({ Icon, titulo, descripcion }, i) => (
                        <Reveal key={titulo} delay={i * 0.1}>
                            <article className="group h-full overflow-hidden rounded-2xl border border-paper/10 bg-paper/5 transition hover:-translate-y-1 hover:border-brand/60">
                                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-brand/10 to-transparent">
                                    <Icon className="h-full w-full p-8 text-brand transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-brand">{titulo}</h3>
                                    <p className="mt-2 text-sm text-paper/70">{descripcion}</p>
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