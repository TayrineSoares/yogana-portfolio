
const Comunidade = () => {
  return (
      <section
        id="comunidade"
        className="
          w-full
          py-16 sm:py-20
          bg-[var(--color-primary-07)]
        "
      >
        <div className="max-w-md mx-auto px-4 sm:px-6 text-center">

          {/* Title */}
          <h2 className="
            font-[var(--font-display)]
            text-5xl
            font-light
            text-[var(--color-primary)]
            mb-3
          ">
            Comunidade
          </h2>

          <h2 className="
            font-[var(--font-display)]
            text-5xl
            font-light
           
            text-[var(--color-text)]
            mb-6
          ">
            Yoga'Ana
          </h2>

          {/* Divider */}
          <div className="w-10 h-px bg-[var(--color-accent)] mx-auto opacity-40 mb-6" />

          {/* Description */}
          <p className="
            text-sm
            leading-relaxed
            opacity-60
            mb-8
          ">
            Um espaço para pessoas que desejam viver com mais consciência,
            leveza e conexão.
          </p>

          {/* CTA */}
          <button className="
            border border-[var(--color-text)]
            px-6 py-3
            rounded-full
            text-[0.7rem]
            tracking-[0.2em]
            uppercase
            transition-all duration-300
            hover:opacity-70
          ">
            Entrar para a comunidade
          </button>

          {/* Symbol */}
          <div className="mt-12 flex items-center justify-center gap-3 opacity-50">
            <div className="w-px h-6 bg-[var(--color-accent)]" />
            <span className="font-[var(--font-display)] text-base italic">ॐ</span>
            <div className="w-px h-6 bg-[var(--color-accent)]" />
          </div>

        </div>
      </section>
    );
  }

export default Comunidade;
