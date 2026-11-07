"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CtaButton } from "../CtaButton";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-ink text-paper">
            {/* resplandor amarillo de fondo */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"
            />

            <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pb-16 pt-10 text-center md:pb-24 md:pt-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/logo.png"
                        alt="Revital90"
                        width={400}
                        height={400}
                        priority
                        className="h-auto w-48 md:w-72"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-10 text-4xl font-black leading-tight tracking-tight md:text-6xl"
                >
                    Título principal que{" "}
                    <span className="text-brand">promete el resultado</span> que tu cliente busca
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-6 max-w-2xl text-lg text-paper/75 md:text-xl"
                >
                    Descripción corta de lo que haces, para quién es y qué cambio van a
                    lograr. Dos líneas como máximo.
                </motion.p>

                {/* CTA con pulso suave */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        boxShadow: [
                            "0 0 0 0 rgba(255,213,0,0.5)",
                            "0 0 0 18px rgba(255,213,0,0)",
                        ],
                    }}
                    transition={{
                        opacity: { delay: 0.5 },
                        scale: { delay: 0.5 },
                        boxShadow: { duration: 1.8, repeat: Infinity, delay: 1 },
                    }}
                    className="mt-10 rounded-full"
                >
                    <CtaButton className="h-14 rounded-full px-8 text-base md:text-lg" />
                </motion.div>

                <p className="mt-4 text-sm text-paper/50">Sin costo · Sin compromiso</p>
            </div>
        </section>
    );
}