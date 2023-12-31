import React from "react";
import QuestionItem from "../questionItem/QuestionItem";
import { QuestionItem as QuestionItemType } from "../../types/QuestionItem";
import { quizData } from "../../types/QuizData";

type QuestionsContainerType = {
  questions: quizData;
  showResults: boolean;
  onAnswerSelect: (questionIndex: number, answerIndex: number) => void;
};
const QuestionsContainer: React.FC<QuestionsContainerType> = ({
  questions,
  showResults,
  onAnswerSelect,
}) => {
  return (
    <div className="questions_container">
      {questions.questions.map((ques: QuestionItemType, index: number) => {
        return (
          <QuestionItem
            showResults={showResults}
            key={ques.id}
            ques={ques}
            index={index}
            onAnswerSelect={(answerIndex: number) =>
              onAnswerSelect(index, answerIndex)
            }
          />
        );
      })}
    </div>
  );
};

export default QuestionsContainer;
