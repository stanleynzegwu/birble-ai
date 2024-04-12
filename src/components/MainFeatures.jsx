import { MAIN_FEATURES } from "../constants";
import Image from "next/image";

const MainFeatures = () => {
  return (
    <div className="w-full h-[140px] p-3 flex gap-4 rounded-3xl bg-[#11112C]">
      {MAIN_FEATURES.map(({ title, description, bgColor, imagePath }, index) => (
        <div
          className={`relative w-full rounded-3xl p-4`}
          key={index}
          style={{ backgroundColor: bgColor }}
        >
          <div className="w-full h-full flex flex-col justify-end">
            <h3 className="font-semibold text-lg capitalize">{title}</h3>
            <p className="text-[rgb(255,255,255,0.5)] text-[12px]">{description}</p>
          </div>
          <Image
            key={index}
            src={imagePath}
            alt="solar"
            width={100}
            height={100}
            className="absolute top-[-22px] right-[-15px] w-[150px] h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default MainFeatures;
