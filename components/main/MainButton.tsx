import React from 'react'

type Props = {
  color: string,
  hover: string,
  text: string,
  type: string,
  link: string,
}

type ButtonStyle = {
  [key: string]: string
}

const MainButton = (props: Props) => {
  const buttonStyle: ButtonStyle = {
    "blue": "bg-cyan-500 hover:bg-green-400 px-6 py-2 rounded-3xl text-white shadow-md flex cursor-pointer",
    "darkblue": "bg-blue-800 hover:bg-orange-600 px-6 py-2 rounded-3xl text-white shadow-md flex cursor-pointer",
  }
  return (
    <div className={buttonStyle[props.color]}>
      {props.text}
    </div>
  )
}

export default MainButton