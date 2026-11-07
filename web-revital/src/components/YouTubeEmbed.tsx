"use client";
import { useState } from "react";

export function YouTubeEmbed({ id, title, vertical = false, }: { id: string; title: string; vertical?: boolean; }) {
    const [play, setPlay] = useState(false);
    return (
        <div
            className={`relative w-full overflow-hidden rounded-2xl bg-ink ${vertical ? "mx-auto aspect-[9/16] max-w-xs" : "aspect-video"
                }`}
        >
            {play ? (
                <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                    title={title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <button onClick={() => setPlay(true)} className="group absolute inset-0" aria-label={`Reproducir ${title}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={title} className="h-full w-full object-cover" />
                    <span className="absolute inset-0 grid place-items-center bg-black/30 transition group-hover:bg-black/10">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-brand text-3xl text-ink">▶</span>
                    </span>
                </button>
            )}
        </div>
    );
}