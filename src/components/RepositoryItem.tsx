import { Repository } from "../types/repository";

const LanguageColor: Record<string, string> = {
  React: "bg-[#61DAFB]",
  Javascript: "bg-[#F7DF1E]",
  Python: "bg-[#3776AB]",
  Swift: "bg-[#FA7343]",
  Java: "bg-[#0969DA]",
  "HTML/CSS": "bg-[#E34F26]",
  PHP: "bg-[#4F5D95]",
};

export function RepositoryItem({
  name,
  visibility,
  language,
  size,
  updatedAt,
}: Repository) {
  return (
    <div className="px-4 py-5 bg-white hover:bg-[#F5F5F5] border-b border-[#D5D7DA] cursor-pointer">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <h3 className=" font-medium  ">{name}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full border font-medium bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]">
            {visibility}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-[#57606A]">
        <div className="flex items-center gap-1.5">
          {language}

          <span
            className={`w-2.5 h-2.5 rounded-full ${LanguageColor[language]}`}
          />
        </div>
        <span>{size}</span>
        <span>Updated {updatedAt}</span>
      </div>
    </div>
  );
}
