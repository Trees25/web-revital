import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";

const preguntas = [
    {
        q: "¿Lorem ipsum dolor si amet, consectetur adipiscing elit?",
        a: "ipsum dolor sit",
    },
    {
        q: "¿Lorem ipsum dolor st amet, consectetur adipiscing elit?",
        a: "ipsum dolor sit",
    },
    {
        q: "¿Lorem ipsum dolor it amet, consectetur adipiscing elit?",
        a: "ipsum dolor sit",
    },
    {
        q: "¿Lorem ipsum dolor amet, consectetur adipiscing elit?",
        a: "ipsum dolor sit",
    },
];

export function Faq() {
    return (
        <section className="bg-paper px-4 py-20 text-ink">
            <div className="mx-auto max-w-3xl">
                <Reveal>
                    <h2 className="text-center text-3xl font-black md:text-5xl">
                        Preguntas <span className="rounded-lg bg-brand px-2">frecuentes</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <Accordion className="mt-12 space-y-3">
                        {preguntas.map((p, i) => (
                            <AccordionItem
                                key={p.q}
                                value={`item-${i}`}
                                className="rounded-xl border border-ink/10 bg-paper px-5 data-[open]:border-brand data-[open]:shadow-md"
                            >
                                <AccordionTrigger className="text-left text-base font-bold hover:no-underline md:text-lg">
                                    {p.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-ink/70">
                                    {p.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Reveal>

                <div className="mt-12 flex justify-center">
                    <CtaButton className="h-14 rounded-full px-8" />
                </div>
            </div>
        </section>
    );
}