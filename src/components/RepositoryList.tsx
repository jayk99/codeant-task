import { useMemo } from "react";
import { motion } from "framer-motion";
import { RepositoryItem } from "./RepositoryItem";
import type { RepositoryListProps } from "../types/repository";
import { repositories } from "../constants/data";

const simplifyString = (str: string): string =>
  str.toLowerCase().trim().replace(/\s+/g, " ");

export const RepositoryList = ({ searchQuery = "" }: RepositoryListProps) => {
  const filteredRepositories = useMemo(() => {
    const normalizedQuery = simplifyString(searchQuery);
    if (!normalizedQuery) return repositories;

    const searchTerms = normalizedQuery.split(" ");
    return repositories
      .filter((repo) => {
        const searchableText =
          `${repo.name} ${repo.language} ${repo.visibility}`.toLowerCase();
        return searchTerms.every((term) =>
          searchableText.includes(term.toLowerCase())
        );
      })
      .sort((a, b) => {
        // Prioritize exact name matches
        const aNameMatch = searchTerms.some((term) =>
          simplifyString(a.name).includes(term.toLowerCase())
        );
        const bNameMatch = searchTerms.some((term) =>
          simplifyString(b.name).includes(term.toLowerCase())
        );

        if (aNameMatch && !bNameMatch) return -1;
        if (!aNameMatch && bNameMatch) return 1;

        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      });
  }, [searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="divide-y divide-[#D0D7DE]"
    >
      {filteredRepositories.map((repo, index) => (
        <motion.div
          key={repo.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <RepositoryItem {...repo} />
        </motion.div>
      ))}
    </motion.div>
  );
};
