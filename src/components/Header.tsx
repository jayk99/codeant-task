import { Plus, RefreshCw, Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isMobile?: boolean;
  onSearch: (query: string) => void;
}

export const Header = ({ isMobile, onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const ActionButtons = () => (
    <>
      <button className="flex items-center border border-[#D5D7DA] gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded text-gray-700 hover:bg-gray-100">
        <RefreshCw size={16} />
        Refresh All
      </button>
      <button className="flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded bg-[#0969DA] text-white hover:bg-[#0860C9]">
        <Plus size={16} />
        Add Repository
      </button>
    </>
  );

  return (
    <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-medium text-gray-900">Repositories</h1>
            <span className="text-sm text-gray-600">33 total repositories</span>
          </div>
          {!isMobile && (
            <div className="flex items-center gap-2">
              <ActionButtons />
            </div>
          )}
        </div>

        <div className="relative w-full max-w-[320px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search repositories"
            className="w-full pl-10 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-500"
          />
        </div>

        {isMobile && (
          <div className="flex items-start gap-2 mt-4">
            <ActionButtons />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
