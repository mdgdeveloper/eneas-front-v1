import LogoMini from "@/components/main/LogoMini";

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className="bg-gray-100 h-screen p-5 w-100">
      <div className="pl-5 pt-5"><LogoMini /></div>
    </div>
  )
}

export default SideBar;