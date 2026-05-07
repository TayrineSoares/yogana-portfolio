import yogaImg from "../assets/yoga-warm.jpg";
import reikiImg from "../assets/reiki-warm.jpg";

const Programas = () => {
  return (
    <section
      id="programas"
      className="w-full py-16 sm:py-20 bg-[var(--color-muted-soft)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="
            font-[var(--font-display)]
            text-3xl sm:text-4xl
            font-light
            text-[var(--color-primary)]
            mb-4
          ">
            Programas
          </h2>

          <div className="w-12 h-px bg-[var(--color-accent)] mx-auto opacity-40" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Card 1 */}
          <article className="
            bg-white/60
            rounded-2xl
            overflow-hidden
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          ">
            <div className="aspect-[3/3.5] overflow-hidden">
              <img
                src={yogaImg}
                alt="Aulas de Yoga"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="
                font-[var(--font-display)]
                text-xl
                mb-3
                text-[var(--color-primary)]
              ">
                Aulas de Yoga
              </h3>

              <p className="
                text-sm
                leading-relaxed
                opacity-60
                mb-5
              ">
                Práticas guiadas para fortalecer o corpo, melhorar a mobilidade
                e cultivar presença no dia a dia. 
              </p>

              <span className="
                text-xs
                tracking-wide
                uppercase
                text-[var(--color-accent)]
                border-b border-[var(--color-accent)]/50
                pb-1
              ">
                Saiba mais
              </span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="
            bg-white/60
            rounded-2xl
            overflow-hidden
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          ">
            <div className="aspect-[3/3.5] overflow-hidden">
              <img
                src={reikiImg}
                alt="Reiki Sessions"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="
                font-[var(--font-display)]
                text-xl
                mb-3
                text-[var(--color-primary)]
              ">
                Sessões de Reiki
              </h3>

              <p className="
                text-sm
                leading-relaxed
                opacity-60
                mb-5
              ">
                Terapia energética que promove relaxamento profundo, alívio do estresse e da ansiedade, trazendo mais equilíbrio e harmonia interior.
              </p>

              <span className="
                text-xs
                tracking-wide
                uppercase
                text-[var(--color-accent)]
                border-b border-[var(--color-accent)]/50
                pb-1
              ">
                Saiba mais
              </span>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Programas;
