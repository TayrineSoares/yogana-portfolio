type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

const Button = ({ children, href, onClick }: ButtonProps) => {
  const baseStyles = `
    inline-block
    border border-[var(--color-primary)]
    text-[var(--color-primary)]
    px-8 py-3
    rounded-full
    text-[0.7rem]
    tracking-[0.2em]
    uppercase
    font-medium
    transition-all duration-300
    hover:opacity-70
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
};

export default Button;