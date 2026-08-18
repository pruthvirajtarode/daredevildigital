import logoImg from '../../assets/logo.jpeg';

export default function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {light ? (
        <div className="bg-white p-2 rounded-lg flex items-center justify-center shadow-sm">
          <img 
            src={logoImg} 
            alt="Daredevil Digital" 
            className="h-10 sm:h-12 w-auto object-contain" 
          />
        </div>
      ) : (
        <img 
          src={logoImg} 
          alt="Daredevil Digital" 
          className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply" 
        />
      )}
    </div>
  );
}
