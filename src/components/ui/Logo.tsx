export default function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
  const primary = light ? "#F8F7F2" : "#080857";
  const accent = light ? "#F5C400" : "#6F2420";
  const yellow = "#F5C400";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill={primary} fillOpacity="0.05" />
        <path d="M25 25H45C61.5685 25 75 38.4315 75 55C75 71.5685 61.5685 85 45 85H25V25Z" fill={accent} />
        <path d="M25 25H40C51.0457 25 60 33.9543 60 45C60 56.0457 51.0457 65 40 65H25V25Z" fill={primary} />
        <path d="M45 45L65 25H75L55 45H45Z" fill={yellow} />
        <path d="M45 65L65 85H75L55 65H45Z" fill={yellow} />
      </svg>
      <div className="flex flex-col">
        <span className={`font-display text-xl font-black tracking-tighter leading-none ${light ? 'text-brand-purewhite' : 'text-brand-navy'}`}>
          DAREDEVIL
        </span>
        <span className={`font-body text-[0.65rem] font-bold tracking-[0.3em] uppercase leading-none mt-1 ${light ? 'text-brand-yellow' : 'text-brand-burgundy'}`}>
          Digital
        </span>
      </div>
    </div>
  );
}
