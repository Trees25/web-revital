import { YouTubeEmbed } from "../YouTubeEmbed";
import { Reveal } from "../Reveal";

export function VideoPresentacion() {
    return (
        <section className="bg-ink px-4 pb-20 text-paper">
            <Reveal>
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-3xl border border-brand/30 p-2 shadow-[0_0_60px_-15px] shadow-brand/40">
                        <YouTubeEmbed id="REEMPLAZAR_ID" title="Presentación" />
                    </div>
                </div>
            </Reveal>
        </section>
    );
}