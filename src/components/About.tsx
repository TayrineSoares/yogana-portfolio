import anaPortrait from "../assets/ana-portrait-warm.jpg";
import anaQuali from "../assets/ana-quali-warm.jpg";

import { useState } from "react";


const About = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <section
      id="sobre"
      className="
        px-4 sm:px-6
        py-20 sm:py-24
        bg-[var(--color-muted-soft)]
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
              text-3xl md:text-5xl
              font-light
              text-[var(--color-primary)]
              mb-2
            ">
              Ana Cláudia
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
              Ana Cláudia, natural de Passa Tempo, mora em Belo Horizonte-MG. <br/><br/>Professora e praticante de yoga, reikiana, engenheira civil, maquiadora, apreciadora da natureza, arte, literatura e boas conversas. Sempre em busca de desenvolvimento espiritual e humano.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="
                mt-6
                text-[0.7rem]
                tracking-[0.2em]
                uppercase
                border border-[var(--color-primary)]
                px-6 py-2
                rounded-full
                text-[var(--color-primary)]
                hover:opacity-70
                transition
              "
            >
              Qualificações e experiência
            </button>

            {isOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}>

                {/* Modal box */}
                <div className="
                  bg-[var(--color-bg)]
                  max-w-lg w-full
                  mx-4
                  p-8
                  rounded-2xl
                  relative
                  max-h-[80vh]
                  overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >

                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-sm opacity-60 hover:opacity-100 "
                  >
                    ✕
                  </button>

                  <div className="mb-6 overflow-hidden rounded-xl mt-6">
                    <img
                      src={anaQuali}
                      alt="Ana Claudia"
                      className="
                        w-full
                        h-48 sm:h-56
                        object-cover
                        object-center
                        brightness-90 contrast-90
                      "
                    />
                  </div>

                  {/* Title
                  <h3 className="
                    font-[var(--font-display)]
                    text-xl
                    mb-6
                    text-[var(--color-primary)]
                  ">
                    Qualificações & Experiência
                  </h3> */}

                  <div className="space-y-6 text-sm font-light leading-relaxed">

                    {/* Formação */}
                    <div>
                      <p className="uppercase text-xs tracking-[0.1em] opacity-60 mb-4">
                        Formação
                      </p>

                      <ul className="space-y-1">
                        <li>• Yoga Presencial - Escola Yoganaya (200h)</li>
                        <li>• Yoga B-Learning - Pedro Kupfer (650h)</li>
                        <li>• Workshops: Anatomia Integrativa, Alinhamento, Invertidas, Gokul Yoga, Art of Vinyasa, Pranayamas e Filosofia
                        </li>
                      </ul>
                    </div>

                    {/* Experiência */}
                    <div>
                      <p className="uppercase text-xs tracking-[0.1em] opacity-80 mb-4">
                        Experiência
                      </p>

                      <ul className="space-y-1">
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
            )}

            
         

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;