"use client";
import { useRef, useState } from "react";

type Props = {
    src: string;       // ej: "/videos/maria.mp4"
    title: string;
    poster?: string;   // opcional; si no lo pasás, se usa el primer fotograma
    className?: string;
};

export function VideoPlayer({ src, title, poster, className = "aspect-[9/16]" }: Props) {
    const ref = useRef<HTMLVideoElement>(null);
    const [started, setStarted] = useState(false);

    const play = () => {
        setStarted(true);
        ref.current?.play();
    };

    return (
        <div className={`relative w-full overflow-hidden rounded-2xl bg-ink ${className}`}>
            <video
                ref={ref}
                src={`${src}#t=0.1`}
                poster={poster}
                controls={started}
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
                aria-label={title}
            >
                Tu navegador no puede reproducir este video.
            </video>

            {!started && (
                <button
                    onClick={play}
                    aria-label={`Reproducir ${title}`}
                    className="group absolute inset-0 grid place-items-center bg-black/30 transition hover:bg-black/10"
                >
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-brand text-3xl text-ink">
                        ▶
                    </span>
                </button>
            )}
        </div>
    );
}