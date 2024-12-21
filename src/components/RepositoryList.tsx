import { RepositoryItem } from "./RepositoryItem";
import type { RepositoryListProps } from "../types/repository";
import { repositories } from "../constants/data";
import { motion } from "framer-motion";
import { useMemo } from "react";

function simplifyString(str: string): string {
  return str.toLowerCase().trim().replace(/\s+/g, " ");
}

export function RepositoryList({ searchQuery = "" }: RepositoryListProps) {
  const filteredRepositories = useMemo(() => {
    const normalizedQuery = simplifyString(searchQuery);

    if (!normalizedQuery) return repositories;

    const searchTerms = normalizedQuery.split(" ");

    return repositories
      .filter((repo) => {
        const searchableFields = [repo.name, repo.language, repo.visibility]
          .join(" ")
          .toLowerCase();

        // Check if all search terms match at least one of the fields
        return searchTerms.every((term) => {
          const searchTerm = term.toLowerCase();
          return (
            repo.name.toLowerCase().includes(searchTerm) ||
            repo.language.toLowerCase().includes(searchTerm) ||
            repo.visibility.toLowerCase().includes(searchTerm)
          );
        });
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
}
