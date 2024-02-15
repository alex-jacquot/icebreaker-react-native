import { useState } from "react";
import questionsData from "../data/questions.json";

interface Question {
  question: string;
}

interface FilterOptions {
  // Add filter options here
}

interface SortOptions {
  // Add sort options here
}

interface QuestionManager {
  getNextQuestion: () => string;
  // Add filter and sorting capabilities here
}

const useQuestionManager = (
  filterOptions: FilterOptions = {},
  sortOptions: SortOptions = {}
): QuestionManager => {
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());

  const getNextQuestion = (): string => {
    if (usedQuestions.size === questionsData.length) {
      // If all questions have been used, clear the Set to start over
      setUsedQuestions(new Set());
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questionsData.length);
    } while (usedQuestions.has(randomIndex));

    // Update used questions Set
    const newUsedQuestions = new Set(usedQuestions);
    newUsedQuestions.add(randomIndex);
    setUsedQuestions(newUsedQuestions);

    // Return current question
    return questionsData[randomIndex].question;
  };

  // Add filter and sorting capabilities here

  return {
    getNextQuestion,
    // Add filter and sorting capabilities here
  };
};

export default useQuestionManager;
