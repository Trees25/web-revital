import Image from "next/image";
import type { Testimonio } from "@/data/testimonios";
import { YouTubeEmbed } from "../YouTubeEmbed";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";

type Props = {
    titulo: string;
    items: Testimonio[];
    oscuro?: boolean;
};

export function Testimonios({ titulo, items, oscuro = false }: Props) {
    return (
        <section
            className={`px-4 py-20 ${oscuro ? "bg-ink text-paper" : "bg-paper text-ink"}`}
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="text-center text-3xl font-black md:text-5xl">{titulo}</h2>
                </Reveal>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((t, i) => (
                        <Reveal key={t.nombre} delay={i * 0.08}>
                            <article
                                className={`h-full rounded-2xl border p-4 transition hover:-translate-y-1 hover:border-brand ${oscuro ? "border-paper/10 bg-paper/5" : "border-ink/10 bg-paper shadow-sm"
                                    }`}
                            >
                                {t.videoId && <YouTubeEmbed id={t.videoId} title={t.nombre} vertical={t.vertical} />}

                                {t.foto && !t.videoId && (
                                    <Image
                                        src={t.foto}
                                        alt={t.nombre}
                                        width={600}
                                        height={600}
                                        className="aspect-square w-full rounded-xl object-cover"
                                    />
                                )}

                                {t.texto && (
                                    <p className={`mt-4 ${oscuro ? "text-paper/80" : "text-ink/80"}`}>
                                        “{t.texto}”
                                    </p>
                                )}

                                <p className="mt-3 font-bold">{t.nombre}</p>
                                {t.rol && (
                                    <p className={`text-sm ${oscuro ? "text-paper/60" : "text-ink/60"}`}>
                                        {t.rol}
                                    </p>
                                )}
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