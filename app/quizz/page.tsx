import QuizzCard from "@/components/quizzes/QuizzCard"
import { AreaType, QuestionType } from "@/types"

type Props = {}

const QUESTION_DEMO: QuestionType = {
  id: "1212assd",
  question: "What is the capital of Spain?",
  answers: ["Paris", "London", "Berlin", "Madrid"],
  correctAnswer: 3
}

const AREA_DEMO: AreaType = {
  id: "123asdasd1",
  cert: "AZ104 Azure Administrator",
  name: "Azure Learning",
  icon: "azure",
}


const Quizz = (props: Props) => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <QuizzCard question={QUESTION_DEMO} area={AREA_DEMO} />
    </div>
  )
}

export default Quizz