import anaPortrait from "../assets/ana-portrait.jpeg";

const About = () => {
  return (
    <section
      id="sobre"
      className="
        px-4 sm:px-6
        py-20 sm:py-24
        bg-[var(--color-bg)]
      "
    >
      <div className="max-w-3xl mx-auto">

        <div className="
          flex flex-col md:flex-row
          items-center md:items-start
          gap-12 md:gap-16
        ">

          {/* Image */}
          <div className="
            w-full max-w-xs md:w-5/12
            flex-shrink-0
          ">
            <div
              className="w-full overflow-hidden blob-clip aspect-[4/5]"
              style={{ boxShadow: "var(--shadow-hero)" }}
            >
              <img
                src={anaPortrait}
                alt="Ana Claudia, professora de yoga"
                className="w-full h-full object-cover object-top brightness-90 contrast-90"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">

            {/* Label */}
            <p className="
            text-[0.8rem]
            tracking-[0.3em]
            uppercase
            font-medium
            mb-6
            text-[var(--color-accent)]
          ">
              Sobre
            </p>

            {/* Name */}
            <h2 className="
              font-[var(--font-display)]
              text-3xl sm:text-4xl md:text-5xl
              font-light
              text-[var(--color-primary)]
              mb-2
            ">
              Ana Claudia
            </h2>

            {/* Divider */}
            <div className="
              w-10 h-px
              bg-[var(--color-accent)]
              opacity-40
              mx-auto md:mx-0
              mb-6
            " />

            {/* Bio */}
            <p className="
              text-sm
              leading-relaxed
              opacity-70
              mb-8
            ">
              Ana Cláudia, 36 anos, natural de Passa Tempo, mora em BH-MG. Engenheira civil, maquiadora, praticante de yoga, apreciadora da
              natureza, arte, literatura e boas conversas. Sempre em busca de
              desenvolvimento espiritual e humano.
            </p>

            {/* Qualifications + Experience */}
            <div className="mt-6">

              <h3 className="
                font-[var(--font-display)]
                text-lg
                tracking-[0.05em]
                uppercase
                opacity-80
                mb-4
              ">
                Qualificações & Experiência
              </h3>

              <div className="space-y-6">

                {/* Formação */}
                <div>
                  <p className="
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    opacity-60
                    mb-2
                  ">
                    Formação
                  </p>

                  <ul className="
                    text-sm
                    font-light
                    leading-relaxed
                    space-y-1
                  ">
                    <li>• Yoga Presencial - Escola Yoganaya (200h)</li>
                    <li>• Yoga B-Learning - Pedro Kupfer (650h)</li>
                    <li>
                      • Workshops: Anatomia Integrativa, Alinhamento,
                      Invertidas, Gokul Yoga, Art of Vinyasa, Pranayamas e Filosofia
                    </li>
                  </ul>
                </div>

                {/* Experiência */}
                <div>
                  <p className="
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    opacity-60
                    mb-2
                  ">
                    Experiência
                  </p>

                  <ul className="
                    text-sm
                    font-light
                    leading-relaxed
                    space-y-1
                  ">
                    <li>• Casa Yoga BH</li>
                    <li>• Projeto Solidário Mahakarma Yoga</li>
                    <li>• Yoga na Varanda Rosana Menezes</li>
                    <li>• Namah Wellness</li>
                    <li>• Academia Equilíbrio</li>
                    <li>• Estúdios Maha Yoga e Manik</li>
                    <li>• Aulas particulares</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;