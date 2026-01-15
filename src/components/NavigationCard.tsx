interface NavigationCardProps {
  title: string;
  subtitle: string;
  href: string;
  showArrow?: boolean;
  onClick?: () => void;
}

const NavigationCard = ({ title, subtitle, href, showArrow = false, onClick }: NavigationCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className="group relative block h-full">
      {/* Background layer */}
      <div className="absolute inset-0 bg-luxury-base/80 backdrop-blur-md rounded-sm md:rounded transition-all duration-500 group-hover:bg-luxury-surface/90 border border-luxury-border"></div>

      {/* Content layer */}
      <div className="relative p-8 h-32 md:h-40 flex flex-col items-center justify-center rounded-sm md:rounded transition-all duration-500 group-hover:border-white/20 group-hover:scale-[1.01]">
        <h2 className="text-sm font-light tracking-[0.15em] text-gray-200 mb-2 text-center transition-colors group-hover:text-white">
          {title}
        </h2>
        <span className="text-[10px] tracking-wider text-luxury-muted uppercase group-hover:text-gray-500 transition-colors text-center">
          {subtitle}
        </span>

        {/* Minimal Arrow Icon */}
        {showArrow && (
          <div className="absolute bottom-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white/40">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </div>
        )}
      </div>
    </a>
  );
};

export default NavigationCard;
