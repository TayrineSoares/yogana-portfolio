import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const links = [
    "Programas", "Serviços", "Sobre", "Comunidade"

  ]; 


  return (
   <footer>
    <p>
      Yoga'Ana
    </p>

    <p>
      Ana Claudia · Professora de Yoga

    </p>


    <FaWhatsapp />

    <p>
      Respire. Movimente-se. Volte para si.
    </p>

    <p>
      © 2026 Yoga'Ana · Todos os direitos reservados
    </p>


    
   </footer>
  )
};

export default Footer;
