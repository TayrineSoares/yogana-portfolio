import crowImg from "../assets/arm-balance-warm4.jpeg";
import eightAngleImg from "../assets/arm-balance-warm2.jpeg";
import flyingPigeonImg from "../assets/arm-balance-warm.jpeg";
import Button from "./ui/Button";

const workshop = {
  eyebrow: "Workshop · 08 de novembro",
  title: "Arm Balance",
  subtitle: "com Ana Cláudia",
  description:
    "Venha aprender e refinar sua prática com as bases e técnicas para posturas de equilíbrio e força sobre os braços.",
  details: [
    { label: "Data", value: "08/11" },
    { label: "Horário", value: "10h às 12h" },
    { label: "Valor", value: "R$ 180" },
    { label: "Local", value: "Maha Yoga" },
  ],
  cta: {
    label: "Quero me inscrever",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd2VzOGTK2bc_TyyIjmmEABusa_YrUrGdK1RDysf3xxUBpUvA/viewform",
  },
  images: {
    main: {
      src: crowImg,
      alt: "Ana Cláudia em Bakasana",
    },
    secondary: [
      {
        src: eightAngleImg,
        alt: "Ana Cláudia em Astavakrasana",
      },
      {
        src: flyingPigeonImg,
        alt: "Ana Cláudia em Eka Pada Galavasana",
      },
    ],
  },
};

const WorkshopSection = () => {
  return (
    <section
      id="workshop"
      className="
        w-full
        py-16 sm:py-20
        px-4 sm:px-6
        bg-[var(--color-primary-07)]
      "
    >
      <div className="max-w-[860px] mx-auto">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-10 md:gap-12
            items-center
          "
        >
          {/* Title — first on mobile, top-right on desktop */}
          <div className="order-1 md:order-2 flex flex-col gap-7 text-center md:text-left">
            <div>
              <p
                className="
                  font-[var(--font-body)]
                  text-[11px]
                  font-medium
                  tracking-[0.28em]
                  uppercase
                  text-[var(--color-primary)]
                  mb-3
                "
              >
                {workshop.eyebrow}
              </p>

              <h2
                className="
                  font-[var(--font-display)]
                  text-3xl md:text-5xl
                  font-light
                  text-[var(--color-primary)]
                  mb-2
                "
              >
                {workshop.title}
              </h2>

              <p
                className="
                  font-[var(--font-display)]
                  italic
                  text-lg md:text-xl
                  text-[var(--color-muted)]
                "
              >
                {workshop.subtitle}
              </p>
            </div>

            <div className="w-12 h-px bg-[var(--color-muted)]/25 mx-auto md:mx-0" />

            <p
              className="
                max-w-[400px]
                mx-auto md:mx-0
                font-[var(--font-body)]
                font-light
                text-[15px]
                leading-[1.8]
                text-[var(--color-text)]
                opacity-80
              "
            >
              {workshop.description}
            </p>
          </div>

          {/* Images — second on mobile, left column on desktop */}
          <div className="order-2 md:order-1 md:row-span-2 w-full max-w-[380px] mx-auto md:mx-0">
            <div className="grid grid-cols-2 gap-3">
              <div
                className="col-span-2 overflow-hidden"
                style={{
                  aspectRatio: "1 / 1.05",
                  borderRadius: "999px 999px 20px 20px",
                  boxShadow: "0 30px 60px -30px rgba(94, 70, 60, 0.35)",
                }}
              >
                <img
                  src={workshop.images.main.src}
                  alt={workshop.images.main.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "60% 70%" }}
                />
              </div>

              {workshop.images.secondary.map((image) => (
                <div
                  key={image.alt}
                  className="aspect-square overflow-hidden rounded-[20px]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 75%" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details + CTA — last on mobile, bottom-right on desktop */}
          <div className="order-3 md:order-3 flex flex-col gap-7 text-left">
            <div
              className="
                max-w-[400px]
                mx-auto md:mx-0
                grid grid-cols-2
                gap-x-8 gap-y-5
                py-6
                border-y border-[var(--color-muted)]/20
              "
            >
              {workshop.details.map((item) => (
                <div key={item.label}>
                  <p
                    className="
                      text-[10px]
                      tracking-[0.24em]
                      uppercase
                      font-light
                      text-[var(--color-muted)]
                      mb-1
                    "
                  >
                    {item.label}
                  </p>
                  <p
                    className="
                      font-[var(--font-display)]
                      text-xl md:text-2xl
                      text-[var(--color-primary)]
                    "
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Button
                href={workshop.cta.href}
                className="
                  whitespace-nowrap
                  hover:!opacity-100
                  hover:bg-[var(--color-primary)]
                  hover:text-[var(--color-bg)]
                "
              >
                {workshop.cta.label}
              </Button>
              <p
                className="
                  text-[10px]
                  tracking-[0.24em]
                  uppercase
                  font-medium
                  text-[var(--color-muted)]
                "
              >
                Vagas Limitadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
