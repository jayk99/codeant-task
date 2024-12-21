export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center cursor-pointer gap-2 ${className}`}>
    <img src="/codeant-logo.svg" alt="Logo" className="w-8 h-8" />
    <span className="font-regular text-2xl font-satoshi text-[#24292F]">
      CodeAnt AI
    </span>
  </div>
);
