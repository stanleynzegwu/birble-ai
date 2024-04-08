import LeftSidebar from "./container/LeftSidebar";
import MainContent from "./container/Maincontent";
import RightSidebar from "./container/RightSidebar";

export default function Home() {
  return (
    <main className="flex justify-end bg-[#090330] text-white">
      <LeftSidebar/>
      <div className="relative w-[83%]">
        <nav className="fixed h-16 z-50 bg-[#090330] w-[83%]">
            <div className="w-full h-full flex items-center justify-end pr-16">
              <div className="flex gap-2 items-center">
                <img src="/assets/icons/navIcon1.png" alt="" className="w-[24px] h-[24px]"/>
                <img src="/assets/icons/navIcon2.png" alt="" className="w-[24px] h-[24px]"/>
                <img src="/assets/icons/upbar.png" alt="" className="w-[24px] h-[24px]"/>
              </div>
            </div>
        </nav>
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
