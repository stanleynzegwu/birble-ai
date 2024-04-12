import Topbar from "@/src/components/Topbar";
import LeftSidebar from "../src/container/LeftSidebar";
import MainContent from "../src/container/Maincontent";
import RightSidebar from "../src/container/RightSidebar";

export default function Home() {
  return (
    <main className="flex justify-end bg-[#090330] text-white">
      <LeftSidebar/>
      <div className="relative w-[83%]">
        <Topbar />
        <div className="px-4 mt-16">
          <div className="w-full flex rounded-3xl bg-[#09072A] p-6">
            <MainContent />
            <RightSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}
