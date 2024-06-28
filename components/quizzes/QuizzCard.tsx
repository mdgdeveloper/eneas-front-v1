import { AreaType, QuestionType } from "@/types"

type Props = {
  question: QuestionType,
  area: AreaType
}

const QuizzCard = (props: Props) => {
  return (
    <div>
      <div>{props.area.topic}</div>
      <div>{props.area.title}</div>
      <div>{props.question.question}</div>
      <div>
        {props.question.answers.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
      </div>
    </div>
  )
}

export default QuizzCard