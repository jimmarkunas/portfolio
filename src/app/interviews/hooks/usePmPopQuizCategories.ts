import { useCallback, useMemo, useState } from "react";

import type { InterviewsContent } from "@/content/interviews";

type ServiceCategory = InterviewsContent["slides"]["services"]["categories"][number];

export function usePmPopQuizCategories(categories: ServiceCategory[]) {
  const [revealedPmPopQuizCategories, setRevealedPmPopQuizCategories] = useState<string[]>([]);

  const pmPopQuizCategories = useMemo(() => {
    const shuffledCategories = [...categories];

    for (let i = shuffledCategories.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCategories[i], shuffledCategories[j]] = [
        shuffledCategories[j],
        shuffledCategories[i],
      ];
    }

    return shuffledCategories;
  }, [categories]);

  const togglePmPopQuizCategoryReveal = useCallback((categoryId: string) => {
    setRevealedPmPopQuizCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      }

      return [...prev, categoryId];
    });
  }, []);

  return {
    pmPopQuizCategories,
    revealedPmPopQuizCategories,
    togglePmPopQuizCategoryReveal,
  };
}
