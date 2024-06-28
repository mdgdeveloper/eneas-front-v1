import Course from "@/components/courses/Course"

type Props = {}

const QuizzPage = (props: Props) => {
  const modules = [
    {
      name: "AZ-900",
      description: "Azure Fundamentals",
      logo: "azure",
      q: 120,
      level: "Med",
      lic: "free"
    },
    {
      name: "AZ-104",
      description: "Azure Administrator",
      logo: "azure",
      q: 190,
      level: "Hard",
      lic: "free"
    },
    {
      name: "AZ-204",
      description: "Azure Developer cert",
      logo: "azure",
      q: 190,
      level: "Hard",
      lic: "free"
    },
    {
      name: "AZ-304",
      description: "Azure Architect cert",
      logo: "azure",
      q: 190,
      level: "Hard",
      lic: "free"
    }
  ]
  return (
    <div className="pt-5 ">
      <h2 className="text-2xl font-semibold pb-2">Welcome to AcademIA</h2>
      <p className="text-md font-light pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla id felis sit amet bibendum. In aliquet interdum magna convallis interdum. Nulla molestie sem a eros dictum commodo. Integer vel nunc odio. Praesent id ipsum tempor, egestas nisi et, venenatis nisi. Aenean quis vehicula sapien. Pellentesque quis bibendum sem. </p>

      <h3 className="text-xl font-semibold text-gray-800 pb-5">Modules Library</h3>
      <div className="flex gap-5 flex-wrap">
        {
          modules.map((module, index) => (<Course key={index} {...module} />))
        }
      </div>
    </div>
  )
}

export default QuizzPage