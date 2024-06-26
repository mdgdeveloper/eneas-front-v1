import SideBar from "@/components/structure/SideBar";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})



export default function QuizzesLayout({ children }: Readonly<{ children: React.ReactNode }>) {


  return (

    <div className="flex">
      <div className="w-[350px]">
        <SideBar />
      </div>
      <div className="px-10 py-10 w-9/12">
        {children}
      </div>
    </div >

  );
}