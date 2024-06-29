'use client';

import { useEffect, useState } from "react";

type Props = {
  text: string
  isCorrect: boolean
  onClick: () => void
  active: boolean
  isDisabled: boolean
}

const QuizzItem = (props: Props) => {
  const [bgColor, setbgColor] = useState("bg-gray-400")

  useEffect(() => {
    if (props.isDisabled) {
      if (props.isCorrect) {
        setbgColor("bg-green-500")
      }
    }
  }, [props.isDisabled, props.isCorrect])


  const handleClick = () => {
    if (props.isDisabled) return
    if (props.isCorrect) {
      setbgColor("bg-green-500")
    } else {
      setbgColor("bg-red-500")
    }
    props.onClick()
  }

  return (
    <div onClick={handleClick} className={`text-2xl font-light ${bgColor} mb-2 p-3 rounded-xl text-white ${!props.isDisabled && "hover:bg-gray-500"} ${props.active && "cursor-pointer"}`}>
      {props.text}
    </div>
  )
}

export default QuizzItem