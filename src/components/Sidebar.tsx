import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Phone, LogOut } from "lucide-react";
import NavButton from "./NavButton";
import { navItems, dropdownNames } from "../constants/data";
import { SidebarProps } from "../types/sidebar";
import { Logo } from "./Logo";

export const Sidebar = ({ isMobile, onClose }: SidebarProps) => {
  const [selectedName, setSelectedName] = useState(dropdownNames[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState("Repositories");
  const navigate = useNavigate();

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback(
    (label: string) => {
      setActivePage(label);
      if (label !== "Repositories") {
        alert("This feature is currently under progress!");
      }
      if (isMobile) {
        onClose?.();
      }
    },
    [isMobile, onClose]
  );

  const handleLogout = () => {
    if (isMobile) {
      onClose?.();
    }
    navigate("/auth");
  };

  return (
    <div className="flex flex-col h-0 sm:h-full bg-white">
      <div className="px-3 sm:py-4 space-y-5">
        {!isMobile && <Logo className="hidden sm:flex px-3" />}

        <div className="relative">
          <button
            className="w-full flex items-center justify-between text-sm px-3 py-1.5 rounded bg-white border border-[#D0D7DE] hover:border-[#BFC5CC]"
            onClick={toggleDropdown}
          >
            <span className="text-[#24292F] font-medium truncate">
              {selectedName}
            </span>
            <ChevronDown size={16} className="text-[#57606A] ml-1.5" />
          </button>

          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 mt-1 w-full bg-white border border-[#D0D7DE] rounded shadow-lg z-10"
            >
              {dropdownNames.map((name) => (
                <button
                  key={name}
                  onClick={() => {
                    setSelectedName(name);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-3 py-1.5 text-left text-sm hover:bg-[#F3F4F6] ${
                    name === selectedName ? "bg-[#E4E7EB]" : ""
                  }`}
                >
                  {name}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        <div className="space-y-0.5">
          {navItems.map((item) => (
            <NavButton
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={activePage === item.label}
              onClick={() => handleNavClick(item.label)}
            />
          ))}
        </div>
      </div>

      <div
        className={`mt-none sm:mt-auto px-3 sm:pb-4 space-y-0.5 ${
          isMobile ? "border-t border-transparent" : ""
        }`}
      >
        <NavButton
          icon={Phone}
          label="Support"
          onClick={() => alert("Support feature is currently under progress!")}
        />
        <NavButton icon={LogOut} label="Logout" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Sidebar;
