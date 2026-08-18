import logoImg from '../../assets/logo.jpeg';

export default function Logo({ className = "" }: { className?: string, light?: boolean }) {
  // Note: 'light' prop is kept for compatibility with existing components but 
  // the client provided a static jpeg logo image.
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImg} 
        alt="Daredevil Digital" 
        className="h-14 sm:h-16 w-auto object-contain" 
      />
    </div>
  );
}
