import AzureLogo from "@/icons/azure.svg"
type Props = {
  name: string,
  description: string,
  logo: string,
  q: number,
  level: string,
  lic: string,
}

const Course = (props: Props) => {

  const LOGO = {
    "azure": AzureLogo,
  }

  return (
    <div className="bg-gray-50 rounded-xl p-5 shadow-sm w-[300px] hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out">
      <div className="flex gap-3 border-b pb-2">
        <div><AzureLogo /></div>
        <div>
          <div className="text-4xl">{props.name}</div>
          <div className="-mt-1 text-xl font-light">{props.description}</div>
        </div>
      </div>
      <div className="flex justify-between mt-2 px-3">
        <div>
          <div className="text-xl font-semibold">Qs</div>
          <div className="text-3xl text-gray-600 -mt-1">{props.q}</div>
        </div>
        <div>
          <div className="text-xl font-semibold">Level</div>
          <div className="text-3xl text-orange-400 -mt-1">{props.level}</div>
        </div>
        <div>
          <div className="text-xl font-semibold">Lic</div>
          <div className="bg-green-500 text-white uppercase px-2 py-1 rounded-sm">{props.lic}</div>
        </div>

      </div>
      <div className="mt-4 flex gap-3">
        <div className="cursor-pointer w-8/12 px-5 py-3 bg-gray-400 rounded-xl flex justify-center text-white text-2xl font-semibold hover:bg-gray-500">START</div>
        <div className="cursor-pointer w-3/12 flex items-center justify-center bg-gray-300 rounded-xl hover:bg-blue-300">
          <div className="border-white border-2 rounded-full w-10 h-10 flex justify-center items-center text-2xl text-white font-bold">i</div>
        </div>
      </div>
    </div>
  )
}

export default Course