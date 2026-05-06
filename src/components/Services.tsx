const services = [
  {
    title: "Aulas individuais",
    description:
      "Práticas personalizadas para suas necessidades, respeitando seu ritmo e momento.",
  },
  {
    title: "Aulas em grupo",
    description:
      "Momentos de conexão e presença em grupo, com práticas acessíveis e acolhedoras.",
  },
  {
    title: "Programas especiais",
    description:
      "Jornadas guiadas com foco em bem-estar, autoconhecimento e equilíbrio.",
  },
];

const Services = () => {
  return (
    <section
      id="servicos"
      className="
        px-4 sm:px-6
        py-16 sm:py-20
      "
    >
      <div className="max-w-xl mx-auto text-center">

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