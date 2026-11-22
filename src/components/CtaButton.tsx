const NUMERO = "5491112345678"; //reemplazar por el número real
const MENSAJE = "Hola, quiero agendar una consultoría gratuita.";

const href = `https://wa.me/${NUMERO}?text=${encodeURIComponent(MENSAJE)}`;

export function CtaButton({ className = "" }: { className?: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-bold text-ink transition hover:brightness-95 active:scale-95 ${className}`}
        >
            Quiero agendar una consultoría gratuita
        </a>
    );
}