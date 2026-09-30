import retiro1 from "../assets/retiro-1.jpeg";
import retiro2 from "../assets/retiro-2.jpeg";
import retiro3 from "../assets/retiro-3.jpeg";
import { comunidadeLink } from "./Comunidade";
import Button from "./ui/Button";

const TemporaryOffer = () => {
  return (
    <section
      id="retiro"
      className="
        w-full
        py-16 sm:py-20
        px-4 sm:px-6
        bg-[var(--color-bg)]
      "
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="
            flex flex-col md:flex-row
            items-center md:items-center
            gap-12 md:gap-16
          "
        >
          {/* Image grid */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-[4/5] sm:aspect-[5/6]">
              <div className="row-span-2 overflow-hidden rounded-2xl">
                <img
                  src={retiro1}
                  alt="Retiro de Primavera — prática em meio à natureza"
                  className="w-full h-full object-cover brightness-90 contrast-90"
                />
              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={retiro2}
                  alt="Retiro de Primavera — momento de conexão"
                  className="w-full h-full object-cover brightness-90 contrast-90"
                />
              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={retiro3}
                  alt="Retiro de Primavera — paisagem em Jaboticatubas"
                  className="w-full h-full object-cover brightness-90 contrast-90"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p
              className="
                text-[0.8rem]
                tracking-[0.3em]
                uppercase
                font-medium
                mb-6
                text-[var(--color-accent)]
              "
            >
              Yoga · Natureza · Espiritualidade
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
              Retiros na Serra
            </h2>

            <div
              className="
                w-10 h-px
                bg-[var(--color-accent)]
                opacity-40
                mx-auto md:mx-0
                mb-6
              "
            />

            <p
              className="
                text-sm
                leading-relaxed
                opacity-70
                mb-2
              "
            >
              Próximas datas em breve
            </p>

            <p
              className="
                text-sm
                leading-relaxed
                opacity-60
                mb-6
              "
            >
              Jaboticatubas/MG
            </p>

            <p
              className="
                text-sm
                leading-relaxed
                opacity-70
                mb-8
              "
            >
              Em meio à natureza da serra mineira, nossos retiros são um convite a cultivar presença através do yoga, do silêncio e da espiritualidade. Novas edições acontecem ao longo do ano. Entre na nossa comunidade para receber as novidades em primeira mão.
            </p>

            <Button href={comunidadeLink}>
              Entrar na comunidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemporaryOffer;
