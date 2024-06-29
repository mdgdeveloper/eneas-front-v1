'use client';
import { AreaType, QuestionType } from "@/types"
import AzureLogo from "@/icons/azure.svg"
import QuizzItem from "./QuizzItem"
import { useState } from "react";
type Props = {
  question: QuestionType,
  area: AreaType
}

const QuizzCard = (props: Props) => {
  const [answerIndex, setAnserIndex] = useState<number>(-1)
  return (
    <div className="bg-gray-100 p-10 rounded-xl border border-gray-200">
      <div className="flex gap-2 pb-10">
        <AzureLogo />
        <div>
          <div className="uppercase font-semibold text-gray-600 pb-1">{props.area.name}</div>
          <div className="font-light text-gray-900 text-3xl">{props.area.cert}</div>
        </div>

      </div>
      <div className="uppercase text-gray-600 font-semibold text-md">Question 5/10</div>
      <div className="text-gray-800 font-light text-3xl pb-5">{props.question.question}</div>
      <div>
        {props.question.answers.map((answer, index) => (
          <QuizzItem key={index} text={answer} isCorrect={index === props.question.correctAnswer ? true : false}
            onClick={() => setAnserIndex(index)} active={answerIndex === -1 ? true : false} isDisabled={answerIndex !== -1}
          />
        ))}
      </div>
    </div>
  )
}

export default QuizzCard