import LeftSidebar from "./container/LeftSidebar";
import MainContent from "./container/Maincontent";
import RightSidebar from "./container/RightSidebar";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-end bg-[#090330] text-white">
      <LeftSidebar/>
      <div className="relative w-[83%]">
        <nav className="fixed h-16 z-50 bg-[#090330] w-[83%]">
            <div className="w-full h-full flex items-center justify-end pr-16">
              <div className="flex gap-2 items-center">
                {["/assets/icons/navIcon1.png","/assets/icons/navIcon2.png","/assets/icons/upbar.png"].map((iconPath,index) => (
                 <Image
                  src={iconPath}
                  key={index}
                  alt={`icon`}
                  width={20}
                  height={20}
                  style={{ maxWidth: "100%", height: "auto" }}
                /> 
                ))}
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
