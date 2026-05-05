import heroImage from "../assets/aninha-hero-warm.jpg"; 
import Button from "./ui/Button";

const Hero = () => {
  const whatsappLink =
    "https://wa.me/5531988094532?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20yoga.";

  return (
    <section
      className="
        min-h-screen
        flex flex-col items-center
        justify-start
        px-4 sm:px-6
        pt-16 pb-16
      "
    >
      {/* Brand */}
      <p className="
            text-[0.8rem]
            tracking-[0.3em]
            uppercase
            font-medium
            mb-6
            text-[var(--color-accent)]
          ">
        Yoga'Ana
      </p>

      {/* Image */}
      <div className="w-full max-w-[320px] mx-auto mb-8">
        <div
          className="overflow-hidden blob-clip w-full"
          style={{
            aspectRatio: "3/4",
            boxShadow: "var(--shadow-hero)",
          }}
        >
          <img
            src={heroImage}
            alt="Ana Claudia praticando yoga"
            className="w-full h-full object-cover object-top brightness-90 contrast-90"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center w-full max-w-sm mx-auto">

        <h1
           className="
            font-[var(--font-display)]
            font-light
            text-[1.8rem] sm:text-[2.1rem]
            leading-[1.35]
            tracking-[0.01em]
            text-[var(--color-primary)]
            opacity-90
            mb-6
          "
        >
          Um espaço para respirar, desacelerar e voltar para o seu centro.
        </h1>

        <p
          className="
            text-sm
            leading-relaxed
            mb-8
            text-[var(--color-text)]
            opacity-70
          "
        >
          Bem-vinda ao universo Yoga'Ana. Aqui o yoga é um convite para
          reconectar corpo, mente e espírito através da presença, da respiração
          e do movimento consciente.
        </p>

        {/* CTA → WhatsApp */}
        <Button href={whatsappLink}>
          Praticar com Ana
        </Button>

      </div>
    </section>
  );
};

export default Hero;