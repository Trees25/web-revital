import { VideoPlayer } from "../VideoPlayer";
import { Reveal } from "../Reveal";

export function VideoPresentacion() {
    return (
        <section className="bg-ink px-4 pb-20 text-paper">
            <Reveal>
                <div className="mx-auto w-[min(100%,calc(65dvh*9/16),380px)] md:w-[min(100%,calc(80dvh*9/16),460px)]">
                    <div className="rounded-3xl border border-brand/30 p-2 shadow-[0_0_60px_-15px] shadow-brand/40">
                        <VideoPlayer
                            src="/testimonios/videos/presentacion.mp4"
                            poster="/testimonios/videos/previewPresentacion.webp"
                            title="Presentación"
                        />
                    </div>
                </div>
            </Reveal>
        </section>
    );
}