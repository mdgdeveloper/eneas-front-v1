import Header from "@/components/main/Header";
import Logo from "@/components/main/Logo";
import MainButton from "@/components/main/MainButton";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex items-center justify-center gap-5 flex-col mt-32">
        <div className="pb-5">
          <Logo />
        </div>
        <div className="text-6xl w-7/12 text-center font-semibold">
          Master Technical Certifications with AI-Powered Learning
        </div>
        <div className="w-5/12 text-center">
          Unlock your potential with AI-powered learning. Personalized Training and Progress Tracking for Technical mastery.
        </div>
        <div className="flex gap-5">
          <MainButton color="blue" hover="bg-blue-200" text="Get Started Free" type="standard" link="/quizzes" />
          <MainButton color="darkblue" hover="bg-orange-100" text="Access to your dashboard" type="beta" link="/register" />
        </div>
      </div>

    </main>
  );
}
