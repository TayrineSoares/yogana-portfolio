import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TemporaryOffer from "../components/TemporaryOffer";

const galleryModules = import.meta.glob(
  "../assets/retiro-galeria*.jpeg",
  { eager: true, import: "default" },
);

const photos = Object.entries(galleryModules)
  .flatMap(([path, src]) => {
    const number = Number(path.match(/retiro-galeria(\d+)\./)?.[1]);

    if (!number) return [];

    return [
      {
        src: src as string,
        alt: `Foto do Retiro de Primavera ${number}`,
        number,
      },
    ];
  })
  .sort((a, b) => a.number - b.number)
  .map(({ src, alt }) => ({ src, alt }));

const pageTitle = "Retiros na Serra | Yoga'Ana";
const pageDescription =
  "Retiros de yoga na serra mineira, em Jaboticatubas/MG. Imersões para cultivar presença através do yoga, do silêncio e da espiritualidade.";

const Retiros = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";

    document.title = pageTitle;
    meta?.setAttribute("content", pageDescription);

    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) =>
          index === null ? index : (index + 1) % photos.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((index) =>
          index === null
            ? index
            : (index - 1 + photos.length) % photos.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <TemporaryOffer />

      <section
        className="
          w-full
          py-16 sm:py-20
          px-4 sm:px-6
          bg-[var(--color-bg)]
        "
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="
                font-[var(--font-display)]
                text-3xl md:text-5xl
                font-light
                text-[var(--color-primary)]
                mb-2
              "
            >
              Nosso último retiro
            </h2>

            <p className="text-sm leading-relaxed opacity-60">
              Retiro de Primavera · Setembro 2026
            </p>

            <div className="w-12 h-px bg-[var(--color-accent)] mx-auto opacity-40 mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActive(index)}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/5] brightness-90 contrast-90"
                />
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="
                inline-block
                border border-[var(--color-primary)]
                text-[var(--color-primary)]
                px-8 py-3
                rounded-full
                text-[0.7rem]
                tracking-[0.2em]
                uppercase
                font-medium
                transition-all duration-300
                hover:opacity-70
              "
            >
              Voltar
            </Link>
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 text-sm opacity-60 hover:opacity-100"
            aria-label="Fechar"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActive(
                (index) =>
                  index === null
                    ? index
                    : (index - 1 + photos.length) % photos.length
              );
            }}
            className="
              absolute left-3 sm:left-6 top-1/2 -translate-y-1/2
              flex items-center justify-center
              w-11 h-11
              rounded-full
              border border-[var(--color-primary)]
              bg-[var(--color-bg)]
              text-[var(--color-primary)]
              text-xl
              hover:opacity-70
              transition
            "
            aria-label="Foto anterior"
          >
            ←
          </button>

          <img
            src={photos[active].src}
            alt={photos[active].alt}
            className="max-h-[80vh] max-w-[min(90vw,56rem)] object-contain rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActive((index) =>
                index === null ? index : (index + 1) % photos.length
              );
            }}
            className="
              absolute right-3 sm:right-6 top-1/2 -translate-y-1/2
              flex items-center justify-center
              w-11 h-11
              rounded-full
              border border-[var(--color-primary)]
              bg-[var(--color-bg)]
              text-[var(--color-primary)]
              text-xl
              hover:opacity-70
              transition
            "
            aria-label="Próxima foto"
          >
            →
          </button>
        </div>
      )}
    </>
  );
};

export default Retiros;
