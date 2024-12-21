export interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export interface NavButtonProps {
  icon: any;
  label: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}
