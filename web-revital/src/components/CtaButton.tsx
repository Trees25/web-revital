export function CtaButton({ className = "" }: { className?: string }) {
    return (
        <a
            href={process.env.NEXT_PUBLIC_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center bg-brand px-6 py-3 font-bold text-ink transition hover:brightness-95 active:scale-95 rounded-full ${className}`}
        >
            Quiero agendar una consultoría gratuita
        </a>
    );
}