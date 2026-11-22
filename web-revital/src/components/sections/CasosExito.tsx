"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const CASOS = [
    { nombre: "Fernando Garcia", imagen: "/casos/fernando.jpg" },
    { nombre: "Nahuel Meissl", imagen: "/casos/nahuel.jpg" },
    { nombre: "Marco Rampulla", imagen: "/casos/marco.jpg" },
    { nombre: "Leo", imagen: "/casos/leo.jpg" },
];

export function CasosExito() {
    return (
        <section id="casos-exito" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Casos de Éxito</h2>

                <Carousel
                    opts={{
                        align: "start",
                        dragFree: true, // Permite deslizar tipo cinta libre con dedo o mouse
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {CASOS.map((caso, index) => (
                            <CarouselItem
                                key={index}
                                // Responsive: 1.2 tarjetas en móvil (insinúa scroll), 2 en tablet, 3 en desktop
                                className="pl-4 basis-[82%] sm:basis-1/2 lg:basis-1/3"
                            >
                                <Card className="overflow-hidden border hover:border-yellow-400 transition-colors">
                                    <CardContent className="p-3">
                                        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                                            <Image
                                                src={caso.imagen}
                                                alt={`Cambio físico de ${caso.nombre}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="mt-3 font-semibold text-base">
                                            {caso.nombre}
                                        </p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Flechas opcionales para desktop */}
                    <div className="hidden md:flex justify-end gap-2 mt-4">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}