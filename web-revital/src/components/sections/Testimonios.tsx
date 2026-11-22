"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { Testimonio } from "@/data/testimonios";
import { VideoPlayer } from "../VideoPlayer";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

type Props = {
    titulo: string;
    items: Testimonio[];
    oscuro?: boolean;
};

export function Testimonios({ titulo, items, oscuro = false }: Props) {
    const [api, setApi] = useState<CarouselApi>();
    const [actual, setActual] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!api) return;
        const update = () => {
            setTotal(api.scrollSnapList().length);
            setActual(api.selectedScrollSnap());
        };
        update();
        api.on("select", update);
        api.on("reInit", update);
        return () => {
            api.off("select", update);
            api.off("reInit", update);
        };
    }, [api]);

    return (
        <section
            className={`px-4 py-20 ${oscuro ? "bg-ink text-paper" : "bg-paper text-ink"}`}
        >
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="text-center text-xl font-black md:text-4xl">{titulo}</h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="relative mt-12 md:px-10">
                        <Carousel
                            setApi={setApi}
                            opts={{ align: "start", loop: false, dragFree: false }}
                        >
                            <CarouselContent className="-ml-4">
                                {items.map((t) => (
                                    <CarouselItem
                                        key={t.nombre}
                                        className="basis-[70%] pl-4 sm:basis-1/3 lg:basis-1/4"
                                    >
                                        <article
                                            className={`h-full rounded-2xl border p-4 ${oscuro
                                                ? "border-paper/10 bg-paper/5"
                                                : "border-ink/10 bg-paper shadow-sm"
                                                }`}
                                        >
                                            {t.video && <VideoPlayer src={t.video} title={t.nombre} />}

                                            {t.foto && !t.video && (
                                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink/5">
                                                    <Image
                                                        src={t.foto}
                                                        alt={t.nombre}
                                                        fill
                                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                                                        draggable={false}
                                                        className={t.ajuste === "contain" ? "object-contain" : "object-cover"}
                                                        style={{ objectPosition: t.posicion ?? "center" }}
                                                    />
                                                </div>
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
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="hidden border-0 bg-brand text-ink hover:bg-brand/90 md:flex md:-left-12" />
                            <CarouselNext className="hidden border-0 bg-brand text-ink hover:bg-brand/90 md:flex md:-right-12" />
                        </Carousel>
                    </div>

                    {/* puntitos */}
                    {total > 1 && (
                        <div className="mt-6 flex justify-center gap-2">
                            {Array.from({ length: total }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => api?.scrollTo(i)}
                                    aria-label={`Ir al caso ${i + 1}`}
                                    className={`h-2.5 rounded-full transition-all ${i === actual
                                        ? "w-8 bg-brand"
                                        : oscuro
                                            ? "w-2.5 bg-paper/30"
                                            : "w-2.5 bg-ink/20"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </Reveal>

                <div className="mt-12 flex justify-center">
                    <CtaButton className="h-14 rounded-full px-8" />
                </div>
            </div>
        </section>
    );
}