import { NavButtonProps } from "../types/sidebar";

const NavButton = ({
  icon: Icon,
  label,
  isActive,
  className = "",
  onClick,
}: NavButtonProps) => (
  <button
    onClick={onClick}
    className={`
      w-full flex items-center gap-3 px-3 py-1.5 text-sm rounded-md
      ${
        isActive
          ? "bg-[#1570EF] text-white font-medium"
          : "text-[#24292F] hover:bg-[#F3F4F6]"
      }
      ${className}
    `}
  >
    <Icon size={16} className={isActive ? "" : "text-[#57606A]"} />
    {label}
  </button>
);

export default NavButton;
