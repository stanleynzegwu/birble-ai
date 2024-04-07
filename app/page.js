import LeftSidebar from "./container/LeftSidebar";
import MainContent from "./container/Maincontent";
import RightSidebar from "./container/RightSidebar";

export default function Home() {
  return (
    <main className="flex justify-between bg-gray-500">
      <LeftSidebar/>
      <div className="relative w-[83%]">
        <div className="fixed w-full h-16 z-20 bg-gray-500">
            TopBar
        </div>
        <div className="px-4 mt-16">
        <div className="w-full flex rounded-xl bg-[#09032F] p-3">
          <MainContent />
          <RightSidebar />
        </div>
        </div>
      </div>
    </main>
  );
}
