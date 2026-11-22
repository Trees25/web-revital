"use client";
import { motion } from "framer-motion";

const draw = (delay = 0, duration = 0.8) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration, delay, ease: "easeInOut" as const },
});

const pop = (delay = 0) => ({
    initial: { scale: 0, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { type: "spring" as const, stiffness: 260, damping: 14, delay },
});

const common = {
    viewBox: "0 0 400 300",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

/* 1. Evaluación inicial: planilla con tildes */
export function IconEvaluacion({ className = "" }: { className?: string }) {
    return (
        <svg {...common} className={className} role="img" aria-label="Evaluación inicial">
            <motion.rect x="120" y="45" width="160" height="220" rx="16" {...draw(0, 1)} />
            <motion.rect x="165" y="30" width="70" height="28" rx="8" {...draw(0.3, 0.6)} />

            {[110, 155, 200].map((y, i) => (
                <g key={y}>
                    <motion.path d={`M148 ${y + 2} l9 9 l18 -20`} {...draw(0.9 + i * 0.45, 0.5)} />
                    <motion.path
                        d={`M195 ${y} H252`}
                        strokeWidth={5}
                        className="opacity-60"
                        {...draw(0.9 + i * 0.45, 0.5)}
                    />
                </g>
            ))}
        </svg>
    );
}

/* 2. Análisis: barras que crecen + lupa */
export function IconAnalisis({ className = "" }: { className?: string }) {
    const base = 240;
    const barras = [
        { x: 85, h: 60 },
        { x: 135, h: 100 },
        { x: 185, h: 80 },
        { x: 235, h: 150 },
    ];

    return (
        <svg {...common} className={className} role="img" aria-label="Análisis">
            {/* ejes */}
            <motion.path d={`M60 40 V${base} H340`} {...draw(0, 0.8)} />

            {barras.map((b, i) => (
                <motion.rect
                    key={b.x}
                    x={b.x}
                    width="30"
                    rx="6"
                    fill="currentColor"
                    stroke="none"
                    initial={{ height: 0, y: base }}
                    whileInView={{ height: b.h, y: base - b.h }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 + i * 0.2, ease: "easeOut" }}
                />
            ))}

            {/* lupa */}
            <motion.g
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7, type: "spring", stiffness: 200, damping: 14 }}
                style={{ transformOrigin: "290px 100px" }}
            >
                <circle cx="290" cy="90" r="34" className="fill-ink" />
                <circle cx="290" cy="90" r="34" />
                <path d="M315 115 L345 145" strokeWidth={10} />
            </motion.g>
        </svg>
    );
}

/* 3. Plan a medida: camino con etapas y meta */
export function IconPlan({ className = "" }: { className?: string }) {
    const nodos = [
        { cx: 60, cy: 230 },
        { cx: 165, cy: 175 },
        { cx: 255, cy: 120 },
    ];

    return (
        <svg {...common} className={className} role="img" aria-label="Plan a medida">
            {/* camino punteado */}
            <motion.path
                d="M60 230 C 110 230, 120 175, 165 175 S 215 120, 255 120 S 310 80, 335 70"
                strokeDasharray="2 14"
                strokeWidth={7}
                {...draw(0, 1.6)}
            />

            {/* etapas */}
            {nodos.map((n, i) => (
                <motion.circle
                    key={i}
                    cx={n.cx}
                    cy={n.cy}
                    r="14"
                    className="fill-ink"
                    style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
                    {...pop(0.5 + i * 0.5)}
                />
            ))}

            {/* meta: bandera */}
            <motion.g {...draw(2, 0.6)}>
                <path d="M335 70 V25" />
                <path d="M335 25 H368 L356 40 L368 55 H335" fill="currentColor" />
            </motion.g>

            {/* pulso en la meta */}
            <motion.circle
                cx="335"
                cy="70"
                r="10"
                stroke="none"
                fill="currentColor"
                style={{ transformOrigin: "335px 70px" }}
                animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 2.4 }}
            />
        </svg>
    );
}