import { useState } from "react";

import yogaImg from "../assets/yoga-warm.jpg";
import reikiImg from "../assets/reiki-warm.jpg";
import youtubeImg from "../assets/arlivre2.jpeg"


const Programas = () => {

  const [openYoga, setOpenYoga] = useState(false);
  const [openReiki, setOpenReiki] = useState(false);
  const [openYoutube, setOpenYoutube] = useState(false);


  return (
    <section
      id="experiencias"
      className="w-full py-16 sm:py-20 bg-[var(--color-muted-soft)]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="
            font-[var(--font-display)]
            text-3xl md:text-5xl
            font-light
            text-[var(--color-primary)]
            mb-2
          ">
            Experiências
          </h2>

          <div className="w-12 h-px bg-[var(--color-accent)] mx-auto opacity-40" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">

          {/* Card 1 - YOGA */}
          <article className="
            bg-white/60
            rounded-2xl
            overflow-hidden
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          ">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={yogaImg}
                alt="Aulas de Yoga"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              {/** logic */}
              {(() => {
                const isOpen = openYoga;

                return (
                  <>
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
                      Práticas guiadas para fortalecer o corpo, melhorar a mobilidade e cultivar presença no dia a dia.
                    </p> <br/>

                    <button
                      onClick={() => setOpenYoga(!openYoga)}
                      className="
                        text-xs uppercase tracking-wide
                        text-[var(--color-accent)]
                        border-b border-[var(--color-accent)]/50
                        pb-1
                      "
                    >
                      {isOpen ? "Fechar" : "Saiba mais"}
                    </button>

                    <div
                      className={`
                        overflow-hidden transition-all duration-500
                        ${isOpen ? "max-h-[300px] mt-4" : "max-h-0"}
                      `}
                    >
                      <p className="text-sm leading-relaxed opacity-70 whitespace-pre-line">
                        Minhas aulas unem elementos do Hatha Yoga, com foco na respiração, permanência nas posturas e meditação, e do Vinyasa Yoga, que traz mais fluidez e sincronização entre movimento e respiração.

                        <br />
                        <br />

                        Cada prática é conduzida com acolhimento e sensibilidade, respeitando as necessidades e o momento de cada aluno.

                        <br />
                        <br />


                        <a
                          href="https://www.canva.com/design/DAGEfMAUyVM/vG8Vx1UdH0Yv_qmZ5qgGjQ/view?utm_content=DAGEfMAUyVM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haf6dcd079c#2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-1.5
                            text-xs uppercase tracking-wide
                            text-[var(--color-primary)]
                            border-b border-[var(--color-primary)]/30
                            pb-0.5
                            hover:opacity-70 transition
                          "
                
                        >
                          Veja valores e detalhes
                        </a>
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </article>


          {/* Card 2 - REIKI */}
          <article className="
            bg-white/60
            rounded-2xl
            overflow-hidden
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          ">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={reikiImg}
                alt="Reiki Sessions"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              {(() => {
                const isOpen = openReiki;

                return (
                  <>
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

                    <button
                      onClick={() => setOpenReiki(!openReiki)}
                      className="
                        text-xs uppercase tracking-wide
                        text-[var(--color-accent)]
                        border-b border-[var(--color-accent)]/50
                        pb-1
                      "
                    >
                      {isOpen ? "Fechar" : "Saiba mais"}
                    </button>

                    <div
                      className={`
                        overflow-hidden transition-all duration-500
                        ${isOpen ? "max-h-[240px] mt-4" : "max-h-0"}
                      `}
                    >
                      <p className="text-sm leading-relaxed opacity-70 whitespace-pre-line">
                        Através da escuta ativa e de um atendimento acolhedor, cada sessão é conduzida de forma individual, respeitando o momento e as necessidades de cada pessoa.
                      
                        <br /> <br />

                        Valores a partir de R$175,00 por sessão.

                        <br /> <br />

                        <a
                          href="https://wa.me/5531988094532?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20Reiki"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-1.5
                            text-xs uppercase tracking-wide
                            text-[var(--color-primary)]
                            border-b border-[var(--color-primary)]/30
                            pb-0.5
                            hover:opacity-70 transition
                          "
                
                        >
                          Agende seu horário
                        </a>


                      </p>

                        
                        
    
                      
                    </div>
                  </>
                );
              })()}
            </div>
          </article>


            {/* Card 3 - YOUTUBE*/}
          <article className="
            bg-white/60
            rounded-2xl
            overflow-hidden
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
          ">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={youtubeImg}
                alt="Canal do Youtube"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 text-center">
              {(() => {
                const isOpen = openYoutube;

                return (
                  <>
                    <h3 className="
                      font-[var(--font-display)]
                      text-xl
                      mb-3
                      text-[var(--color-primary)]
                    ">
                      Conteúdos Gratuitos
                    </h3>

                    <p className="
                      text-sm
                      leading-relaxed
                      opacity-60
                      mb-5
                    ">
                      Práticas de yoga, meditações guiadas e momentos de reflexão em conexão com a natureza.
                    </p> <br/>

                    <button
                      onClick={() => setOpenYoutube(!openYoutube)}
                      className="
                        text-xs uppercase tracking-wide
                        text-[var(--color-accent)]
                        border-b border-[var(--color-accent)]/50
                        pb-1
                      "
                    >
                      {isOpen ? "Fechar" : "Saiba mais"}
                    </button>

                    <div
                      className={`
                        overflow-hidden transition-all duration-500
                        ${isOpen ? "max-h-[240px] mt-4" : "max-h-0"}
                      `}
                    >
                      <p className="text-sm leading-relaxed opacity-70 whitespace-pre-line">

                        Um espaço aberto para levar para o seu dia a dia, quando e onde quiser.

                        <br /> <br />                       

                        <a
                          href="https://www.youtube.com/@yogaanab"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-1.5
                            text-xs uppercase tracking-wide
                            text-[var(--color-primary)]
                            border-b border-[var(--color-primary)]/30
                            pb-0.5
                            hover:opacity-70 transition
                          "
                        >
                          Acesse o canal no YouTube
                        </a>
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Programas;
