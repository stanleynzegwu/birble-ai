import Image from "next/image";

const Topbar = () => {
  return (
    <nav className="fixed h-16 z-50 bg-[#090330] w-[83%]">
      <div className="w-full h-full flex items-center justify-end pr-16">
        <div className="flex gap-2 items-center">
          {[
            "/assets/icons/navIcon1.png",
            "/assets/icons/navIcon2.png",
            "/assets/icons/upbar.png",
          ].map((iconPath, index) => (
            <Image
              src={iconPath}
              key={index}
              alt={`icon`}
              width={20}
              height={20}
              style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
