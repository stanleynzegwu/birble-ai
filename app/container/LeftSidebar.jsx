import Image from "next/image";
import astronaut from "../../public/astronaut.png";

const LeftSidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[17%] bg-[#131623] overflow-y-auto z-[500] p-4 py-8">
      <div className="flex justify-center">
        {/* <img src="/assets/icons/birbleAILogo.png" alt="birble_logo" className="" /> */}
        <Image
          src={"/assets/icons/birbleAILogo.png"}
          alt="birble_logo"
          width={110}
          height={100}
          className="h-auto"
        />
      </div>

      <div className="flex flex-col gap-6 mt-14">
        <span className="pl-5 font-semibold">Dashboard</span>

        <div className="space-y-4">
          <span className="pl-5 font-semibold">AI Generator</span>
          <div className="space-y-4">
            {[
              { iconPath: "/assets/icons/conversationIcon.png", name: "conversation" },
              { iconPath: "/assets/icons/imageIcon.png", name: "Image creation" },
              { iconPath: "/assets/icons/music.png", name: "musc creation" },
              { iconPath: "/assets/icons/videoIcon.png", name: "video generation" },
              { iconPath: "/assets/icons/codeIcon.png", name: "code generation" },
              { iconPath: "/assets/icons/TextVoiceIcon.png", name: "text to voice" },
            ].map(({ iconPath, name }, index) => (
              <div className="flex gap-3 items-center pl-8" key={index}>
                <Image
                  src={iconPath}
                  alt={`${name} icon`}
                  width={12}
                  height={12}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <p className="capitalize text-[#B2B2B2]">{name}</p>
              </div>
            ))}
          </div>
        </div>

        <span className="pl-5 font-medium">Collections</span>
        <span className="pl-5 font-medium">Token Sale</span>
        {/* <img src="/astronaut.png" alt="astronaut" className="my-4" /> */}
        <Image
          src={astronaut}
          alt="astronaut"
          placeholder="blur"
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "auto", marginTop: "16px" }}
        />
        <span className="pl-5 font-medium">Profiles & Settings</span>
        <span className="pl-5 font-medium">FAQ & Help</span>
        <span className="pl-5 font-medium">Logout</span>

        <div className="flex gap-3 items-center mt-4">
          {/* <img src="/person.png" alt="person" className="rounded-2xl w-[65px] h-[65px]" /> */}
          <Image
            src="/person.png"
            alt="person"
            width={70}
            height={70}
            style={{ maxWidth: "100%", height: "auto" }}
            className="rounded-2xl"
          />
          <div className="flex flex-col">
            <span className="font-semibold ">Mima Smith</span>
            <span className="text-[14px] text-[#B2B2B2]">Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
