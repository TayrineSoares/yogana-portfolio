import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const links = ["Programas", "Serviços", "Sobre", "Comunidade"];

  return (
    <footer
      className=" 
        bg-[var(--color-text)]
        text-[var(--color-accent)]
        px-5 pt-16 pb-10
      
        flex flex-col items-center"
    >
      <div
        className="
          flex flex-col items-center
          "
      >
        {/* Brand */}
        <h2 className=" text-3xl mb-4 text-[var(--color-bg)] ">
          Yoga'Ana
        </h2>

        <p className=" 
            text-[0.7rem]
            font-medium
            tracking-[0.2em]
            uppercase
            text-[hsl(var(--color-accent))]
            mb-8">
          Ana Claudia · Professora de Yoga
        </p>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-[var(--color-bg)] tracking-wide opacity-70 hover:opacity-100 transition"
            >
              {link}
            </a>
          ))}
        </nav>
        
        {/* Social */}
        <div className="flex gap-6 mb-12 text-[var(--color-accent)]">
          <FaWhatsapp size={18} className="hover:-translate-y-1 transition"/>

        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-[var(--color-accent)] opacity-20 mb-8" />

        {/* Closing */}
        <p className=" italic text-sm mb-4 opacity-70 font-[var(--font-display)]">
          Respire. Movimente-se. Volte para si.
        </p>

        <p className="text-xs opacity-40">
          © 2026 Yoga'Ana · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
