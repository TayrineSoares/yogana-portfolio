import { FaWhatsapp } from "react-icons/fa";
import { getCurrentYear } from "../helpers/dateHelpers";

const Footer = () => {
  const links = [
    { label: "Experiências", href: "#experiencias" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Comunidade", href: "#comunidade" },
  ];

  return (
    <footer
      className=" 
        bg-[var(--color-text)]
        text-[var(--color-accent)]
        px-4 sm:px-6
        pt-12 sm:pt-16
        pb-8 sm:pb-10
        flex flex-col items-center"
    >
      <div
        className="
          max-w-md sm:max-w-lg mx-auto         
          flex flex-col items-center
          text-center sm:text-center
          "
      >
        {/* Brand */}
        <h2 className=" 
              text-3xl text-[var(--color-bg)]
              font-light
              mb-4  ">
          Yoga'Ana
        </h2>

        <p className=" 
            text-[0.6rem] sm:text-[0.7rem]
            font-medium
            tracking-[0.15em] sm:tracking-[0.25em]
            uppercase
            text-[hsl(var(--color-accent))]
            mb-8">
          Ana Claudia · Professora de Yoga
        </p>

        {/* Links */}

        <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-8 ">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-xs
                text-[var(--color-bg)]
                tracking-wide
                opacity-70
                hover:opacity-100
                transition
              "
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Social */}
        <div className="flex gap-6 text-[var(--color-accent)]">
          <a
            href="https://wa.me/5531988094532?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20yoga."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              size={22}
              className="hover:-translate-y-1 transition cursor-pointer"
            />
          </a>

        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-[var(--color-accent)] opacity-20 my-8" />

        {/* Closing */}
        <p className="
              italic 
              font-[300]
              text-xs md:text-sm mb-4 opacity-70 font-[var(--font-display)]
              px-4 sm:px-0">
          Respire. Movimente-se. Volte para si.
        </p>

        <p className="text-xs opacity-40">
          © {getCurrentYear()} Yoga'Ana · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
