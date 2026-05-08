
import {
  FaLaptop,
  FaUsers,
  FaLeaf,
  FaSpa,
} from "react-icons/fa";

import { GiMeditation } from "react-icons/gi";


const services = [
  {
    title: "Aulas online (Zoom)",
    description:
      "Práticas personalizadas para suas necessidades, respeitando seu ritmo e momento.",
    icon: <FaLaptop />,
  },
  {
    title: "Aulas particulares coletivas",
    description:
      "Momentos de conexão e presença em grupo, com práticas acessíveis e acolhedoras.",
    icon: <FaUsers />,
  },
  {
    title: "Aulas ao ar livre",
    description:
      "Práticas em contato com a natureza, promovendo leveza, presença e bem-estar.",
    icon: <FaLeaf />,
  },
  {
    title: "Aulas em academia ou estúdio de yoga",
    description:
      "Aulas adaptadas para diferentes níveis, com foco em movimento consciente e equilíbrio.",
    icon: <GiMeditation />,
  },
  {
    title: "Sessões de Reiki",
    description:
      "Terapia energética que promove relaxamento profundo, equilíbrio emocional e reconexão interior.",
    icon: <FaSpa />,
  },
];

const Services = () => {
  return (
    <section
      id="servicos"
      className="
        w-full
        py-16 sm:py-20
        
      "
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">

        {/* Title */}
        <h2
          className="
            font-[var(--font-display)]
              text-3xl md:text-5xl
              font-light
              text-[var(--color-primary)]
              mb-6
          "
        >
          Como Posso Ajudar
        </h2>

        {/* Cards */}
        <div className="flex flex-col">

           {services.map((service, index) => (
              <div key={service.title}>

                {/* Service Row */}
                <div className="
                  flex flex-col sm:flex-row
                  items-center sm:items-start
                  gap-5
                  py-8
                  text-center sm:text-left
                ">

                  {/* Icon Circle */}
                  <div className="
                    w-20 h-20
                    rounded-full
                    bg-[var(--color-muted-soft)]
                    flex items-center justify-center
                    flex-shrink-0
                  ">
                    <div className="
                      text-3xl
                      text-[var(--color-primary)]
                      opacity-80
                    ">
                      {service.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">

                    <h3
                      className="
                        font-[var(--font-display)]
                        text-xl
                        font-light
                        text-[var(--color-primary)]
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
                </div>

                {/* Divider */}
                {index !== services.length - 1 && (
                  <div className="w-full h-px bg-[var(--color-accent)] opacity-20" />
                )}

              </div>
            ))}

          </div>

      </div>
    </section>
  );
};

export default Services;