import SideBar from "@/components/structure/SideBar";
import MobileNav from "@/components/ui/mobile-nav";
import Sidebar from "@/components/ui/sidebar";
import { Inter as FontSans } from "next/font/google";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})



export default function QuizzesLayout({ children }: Readonly<{ children: React.ReactNode }>) {


  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div>
        <Sidebar />
        <div className="p-5">
          <MobileNav />
        </div>
      </div>
      <div className="px-10 py-2">
        {children}
      </div>
    </div>

  );
}