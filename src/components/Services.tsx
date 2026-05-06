const services = [
  {
    title: "Aulas online (Zoom)",
    description:
      "Práticas personalizadas para suas necessidades, respeitando seu ritmo e momento.",
  },
  {
    title: "Aulas particulares coletivas",
    description:
      "Momentos de conexão e presença em grupo, com práticas acessíveis e acolhedoras.",
  },
  {
    title: "Aulas ao ar livre",
    description:
      "Práticas em contato com a natureza, promovendo leveza, presença e bem-estar.",
  },

  {
    title: "Aulas em academia e/ou estúdio de yoga",
    description:
      "Aulas adaptadas para diferentes níveis, com foco em movimento consciente e equilíbrio.",
  },

  {
    title: "Sessões de Reiki",
    description:
      "Terapia energética que promove relaxamento profundo, equilíbrio emocional e reconexão interior.",
  },
];


const Services = () => {
  return (
    <section
      id="servicos"
      className="
        w-full
        py-16 sm:py-20
        bg-[var(--color-muted-soft)]
      "
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">

        {/* Title */}
        <h2
          className="
            font-[var(--font-display)]
            text-2xl sm:text-3xl
            font-light
            text-[var(--color-primary)]
            mb-6
          "
        >
          Como Posso Ajudar
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {services.map((service) => (
            <div key={service.title}>

              <h3
                className="
                  font-[var(--font-display)]
                  text-lg
                  font-light
                  mb-2
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  text-sm
                  leading-relaxed
                  opacity-70
                "
              >
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;