import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { RepositoryList } from "../components/RepositoryList";
import { Logo } from "../components/Logo";

export function Dashboard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const renderSidebarOverlay = () => (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={toggleSidebar} />
      <div className="fixed top-0 left-0 right-0 h-[460px] bg-white z-50 shadow-lg">
        <div className="flex items-center justify-between p-4">
          <Logo />
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-md text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="h-[404px] overflow-y-auto">
          <Sidebar isMobile onClose={toggleSidebar} />
        </div>
      </div>
    </>
  );

  const renderMobileLayout = () => (
    <div className="h-screen bg-white">
      <div className="flex items-center justify-between p-4">
        <Logo />
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-md text-gray-700"
        >
          <Menu size={24} />
        </button>
      </div>
      <div className="h-[calc(100vh-64px)] overflow-auto">
        <Header isMobile onSearch={setSearchQuery} />
        <RepositoryList searchQuery={searchQuery} />
      </div>
      {isSidebarOpen && renderSidebarOverlay()}
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="flex h-screen bg-[#F6F8FA]">
      <div className="w-64 border-r border-gray-200 bg-white">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="bg-white rounded-2xl border border-[#E9EAEB] sh">
            <Header onSearch={setSearchQuery} />
            <RepositoryList searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? renderMobileLayout() : renderDesktopLayout();
}
