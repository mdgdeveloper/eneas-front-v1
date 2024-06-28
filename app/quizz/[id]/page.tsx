import QuizzCard from "@/components/quizzes/QuizzCard"
import { AreaType, QuestionType } from "@/types"

type Props = {}

const QUESTION_DEMO: QuestionType = {
  id: "01223ab",
  question: "What is the capital of France?",
  answers: [
    "Paris",
    "London",
    "Berlin",
    "Madrid"
  ],
  correctAnswer: 0,
}

const AREA_DEMO: AreaType = {
  id: "1234",
  topic: "Azure Learning",
  title: "AZ104 - Azure Administrator Associate"
}

const QuizPage = (props: Props) => {


  return (
    <div>
      <QuizzCard question={QUESTION_DEMO} area={AREA_DEMO} />
    </div>
  )
}

export default QuizPage