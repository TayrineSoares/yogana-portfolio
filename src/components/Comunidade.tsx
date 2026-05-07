import { useState } from "react";

const Comunidade = () => {

  const reviews = [
    {
      text: `Queria te agradecer pela aula de ontem. Foi linda, muito poderosa. Uma experiência que nunca vou esquecer, de verdade. E que só reforça a conexão com o divino e a espiritualidade que tenho encontrado e me conectado nos últimos anos.`,
      author: "Bernardo Kerr",
    },
    {
      text: `Uma voz firme, mas com a suavidade da alma foram nossas aulas conduzidas com amor e o estímulo necessário para um bem viver e uma boa saúde, no corpo e no espírito.
      Uma dedicação sem igual, um sinal de profissionalismo e dedicação singulares.`,
      author: "Claudia Filizzo",
    },
    {
      text: `Que aula M-A-R-A-V-I-L-H-O-S-A!
      Que profundo aprender mais sobre contentamento.
      Dessa vez, assim como na aula anterior, me senti no lugar certo, na hora certa, ouvindo exatamente aquilo que precisava.  GRATIDÃO ENORME por estar tendo esse privilégio de estar nas suas aulas.`,
      author: "Renata",
    },
    {
      text: `Queria te agradecer muito pelas suas aulas maravilhosas, pelo atendimento no reiki que foi primoroso. Esse ano teria sido inúmeras vezes mais caótico se eu não tivesse sua guiança semanalmente.`,
      author: "Anna Claudia",
    },
  ];

  const [index, setIndex] = useState(0);


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
            text-3xl md:text-5xl
            font-light
            text-[var(--color-primary)]
            mb-3
          ">
            Comunidade
          </h2>

          <h2 className="
            font-[var(--font-display)]
            text-3xl md:text-5xl
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
          <a
            href="https://chat.whatsapp.com/DRyVlmD8igm3kr3O4dkw6p"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              border border-[var(--color-primary)]
              text-[var(--color-primary)]
              px-6 py-3
              rounded-full
              text-[0.7rem]
              tracking-[0.2em]
              uppercase
              transition-all duration-300
              hover:opacity-70
            "
          >
            Entrar para a comunidade
          </a>

          {/* Divider */}
          <div className="w-10 h-px bg-[var(--color-accent)] mx-auto opacity-40 my-10" />
    

          {/* REVIEWS */}
          <div className="mt-10 text-center">

            {/* Review Content */}
            <div className="
              max-w-sm mx-auto
              h-[180px] sm:h-[200px]
              flex flex-col justify-center 
              transition-all duration-300"
            >
              <p className="
                text-sm
                italic
                leading-7
                opacity-70
                whitespace-pre-line
              ">
                “{reviews[index].text}”
              </p>

              <p className="text-xs mt-3 opacity-50">
                — {reviews[index].author}
              </p>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mt-6">

              {/* Left Arrow */}
              <button
                onClick={() =>
                  setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
                }
                className="text-xs opacity-30 hover:opacity-60 transition"
              >
                ←
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`
                      w-2 h-2 rounded-full transition
                      ${i === index
                        ? "bg-[var(--color-primary)]"
                        : "bg-[var(--color-accent)] opacity-40"}
                    `}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  setIndex((prev) => (prev + 1) % reviews.length)
                }
                className="text-xs opacity-30 hover:opacity-60 transition"
              >
                →
              </button>

            </div>

          </div>

        </div>
      </section>
    );
  }

export default Comunidade;
